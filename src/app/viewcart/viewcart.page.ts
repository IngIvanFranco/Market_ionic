import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading, Report } from 'notiflix';
import { CartService } from '../servicios/cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.page.html',
  styleUrls: ['./viewcart.page.scss'],
})
export class ViewcartPage implements OnInit {
  vlrtotal:any
  cart:any[]=[]
  q:string
  cantidad:any
  constructor(
    private conexcart:CartService,
    private rutas:Router,
  ) { }

  ngOnInit() {
    Loading.pulse()
    this.inicio()

     }

     ionViewDidEnter(){
      this.inicio()
    }

    
  inicio() {
    let cartstorage = localStorage.getItem('cart')// captura el carrito que esta en el localstorage  y lo asigna a una variable
    let carok = JSON.parse(cartstorage)//convierte la variable en un archivo json
    this.cart = this.conexcart.asignarcarrito(carok)//envia el carrito al servicio
    this.valortotal(this.cart)//totaliza el valor del carrito
    this.cargue()
  }

     valortotal(car:any[]){ // funcion para determinar el valor total del carrito de compras
      let total=0
        for (let i = 0; i < car.length; i++) {
          const element = car[i];
      
      total += element.qty * element.price
      
        }
      
        this.vlrtotal=total
      
      
      }


      mas(id,qty){
    
        this.cantidad = Number(qty + 1) 
        this.cambiar(id)
      }

      menos(id,qty){
        this.cantidad = Number(qty - 1) 
        this.cambiar(id)
      }
      
cambiar(id:any){// funcion q captura el evento si hay un cambio de la cantidad del producto

  let res = this.conexcart.cambiarcantidad(this.cantidad,id)
  
  if (res == false) {
   Report.failure('Invercomes','No puedes asignar un valor negativo','OK')
  
  
  }else{
  
  
    this.cart = res
    this.valortotal(this.cart)
  }
  
  
  
  
  }

  search(){

  }
  


      eliminaritem(id:any){// funcion que elimina un item del carrito de compras a traves del servicio


        this.cart = this.conexcart.eliminarcartitem(id)
        this.valortotal(this.cart)
        
        }
        
        cargue(){
        
          Loading.remove()
        }
        

}
