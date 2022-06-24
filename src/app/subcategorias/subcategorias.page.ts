import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loading } from 'notiflix';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {
  public id: string;
  products:any

  constructor(
     private activatedRoute: ActivatedRoute,
        private servicio:ProductosService) { }

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


}
