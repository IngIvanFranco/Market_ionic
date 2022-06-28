import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading } from 'notiflix';
import { CartService } from '../servicios/cart.service';
import { ProductosService } from '../servicios/productos.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
q:string
datosrutas:any
products:any
  constructor( private rutas:Router,
    private activatedRoute: ActivatedRoute,
    private servicio:ProductosService,
    private conexcart:CartService,
    ) { }

  ngOnInit() {
    Loading.pulse()
    this.datosrutas = this.activatedRoute.snapshot.paramMap.get('q');
   this.traerdatos()
  }


  traerdatos(){
this.servicio.getproductsearhc(this.datosrutas).subscribe(res=>{
  this.products = res
  Loading.remove()
  console.log(res);
  
})
}


public  addcart(id:any,name:any,price:any,des:any,tipo:any,cate,subcate,opcate ){

  let carrito =    this.conexcart.addcart(id,name,price,des,tipo,cate,subcate,opcate)
     this.conexcart.totalcarrito(carrito)


  this.rutas.navigateByUrl('/viewcart')

    }
  
  search(){
    this.rutas.navigateByUrl("Search/"+this.q)
    
      }
}
