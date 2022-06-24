import { Component, OnInit } from '@angular/core';
import { Loading } from 'notiflix';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
products:any
q:string
  constructor(
    private servicio:ProductosService
  ) { }

  ngOnInit() {
    Loading.pulse()
    this.traerproductos()
  }

  traerproductos(){

    this.servicio.getproductsgg().subscribe(res=>{
this.products = res
Loading.remove()
    })
  }

  search(){
console.log(this.q);

  }

}
