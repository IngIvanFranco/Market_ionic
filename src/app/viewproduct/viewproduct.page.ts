import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Loading } from 'notiflix';
import { CartService } from '../servicios/cart.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.page.html',
  styleUrls: ['./viewproduct.page.scss'],
})
export class ViewproductPage implements OnInit {
  q:string
  datosrutas:any
  products:any
  constructor(
    private rutas:Router,
    private activatedRoute: ActivatedRoute,
    private servicio:ProductosService,
    private conexcart:CartService,
  ) { }

  ngOnInit() {
    Loading.pulse()
    this.datosrutas = this.activatedRoute.snapshot.paramMap.get('p');
   this.traerdatos()
  }


  traerdatos(){

    this.servicio.getproduct(this.datosrutas).subscribe(res=>{
      this.products = res
      console.log(res);
      Loading.remove()
      
    })

  }

  search(){

  }

  public  addcart(id:any,name:any,price:any,des:any,tipo:any,cate,subcate,opcate ){

    let carrito =    this.conexcart.addcart(id,name,price,des,tipo,cate,subcate,opcate)
       this.conexcart.totalcarrito(carrito)
  
  
    this.rutas.navigateByUrl('/viewcart')
  
      }
}
