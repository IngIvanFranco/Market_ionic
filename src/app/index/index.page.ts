import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
products:any
  constructor(
    private servicio:ProductosService
  ) { }

  ngOnInit() {
    this.traerproductos()
  }

  traerproductos(){

    this.servicio.getproductsgg().subscribe(res=>{
this.products = res
    })
  }

}
