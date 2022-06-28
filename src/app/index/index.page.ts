import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';
import { CartService } from '../servicios/cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
products:any
q:string
  constructor(
    private servicio:ProductosService,
    private conexcart:CartService,
    private rutas:Router
  ) { }

  ngOnInit() {
    Loading.pulse()
    this.traerproductos()
    if (localStorage.getItem("cart") === null) {

      localStorage.setItem("cart","[]")

    }else{


    let cartstorage = localStorage.getItem('cart')
    let carok = JSON.parse(cartstorage)
    this.conexcart.asignarcarrito(carok)
   
  }
  }

  traerproductos(){

    this.servicio.getproductsgg().subscribe(res=>{
this.products = res
Loading.remove()
    })
  }

  search(){
this.rutas.navigateByUrl("Search/"+this.q)

  }


  
 public  addcart(id:any,name:any,price:any,des:any,tipo:any,cate,subcate,opcate ){

  let carrito =    this.conexcart.addcart(id,name,price,des,tipo,cate,subcate,opcate)
     this.conexcart.totalcarrito(carrito)


  this.rutas.navigateByUrl('/viewcart')

    }





}
