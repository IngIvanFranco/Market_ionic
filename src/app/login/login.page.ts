import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Report } from 'notiflix';
import { UsrService } from '../servicios/usr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  q:string
  pass:string
  usr:string
  customer:any
  log:boolean= false
  constructor(
    private rutas:Router,
    private usrservice:UsrService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('usr') == undefined) {
      this.log = false
    }else{
      this.log = true
      this.consultarcustomer(localStorage.getItem('usr'))
    }

    console.log(this.log );
    
  }

  consultarcustomer(idcustomer){
    this.usrservice.getcustomer(idcustomer).subscribe(res=>{
      this.customer = res
    })
  }


  search(){
  
    this.rutas.navigateByUrl("Search/"+this.q)
      }


      login(){
        Loading.circle()
        let datos= {
          'usr':this.usr,
          'pass':this.pass
        }

       this.usrservice.login(datos).subscribe(res=>{
        Loading.remove()
        this.customer = res

        if (this.customer.success == 0) {
          Report.failure( 
            'Invercomes App',
          `Lo sentimos no te encontramos, revisa tu informacion `,
          'Ok')
        }else{

        Report.success(
          'Invercomes App.',
          `Bienvenido: </br> ${this.customer[0].name}`,
          'Yeah'
        )
        this.log=true

        localStorage.setItem('usr',this.customer[0].id)
        this.rutas.navigateByUrl('/viewcart')
       
        }

       })
      }

      registrar(){

      }

      unlogin(){
        localStorage.removeItem('usr')
        Loading.circle('Cerrando sesion')
        Loading.remove(1523)
        this.log=false
      }
    

}
