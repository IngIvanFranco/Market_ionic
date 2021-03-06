import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loading } from 'notiflix';
import { CartService } from '../servicios/cart.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {
  public id: string;
  products:any
q:string
  constructor(
     private activatedRoute: ActivatedRoute,
        private servicio:ProductosService,
        private rutas:Router,
        private conexcart:CartService,) { }

  ngOnInit() {
    Loading.pulse()
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    this.traerdatos()
  }


  traerdatos(){
    this.servicio.getproductssubcate(this.id).subscribe(res=>{
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
