import { Component, OnInit } from '@angular/core';
import { CartService } from './servicios/cart.service';
import { CategoriasService } from './servicios/categorias.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
categorias:any


 
  constructor(private servicio:CategoriasService,
    ) {}
  ngOnInit(): void {
   this.traerdatos()
  
  }


 
  

  traerdatos(){
    this.servicio.getData().subscribe(res=>{
     this.categorias = res
    })
     }
   



}
