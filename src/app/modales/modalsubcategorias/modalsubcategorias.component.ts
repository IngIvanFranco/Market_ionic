import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-modalsubcategorias',
  templateUrl: './modalsubcategorias.component.html',
  styleUrls: ['./modalsubcategorias.component.scss'],
})
export class ModalsubcategoriasComponent  {
  @Input() id: string;
  subcategorias:any
  constructor( public modalCtrl: ModalController,
    navParams: NavParams,
    private servicio:CategoriasService,) { 
      this.id = navParams.get('id')
      
      this.traersubcategorias()
    }


    traersubcategorias(){
      this.servicio.getsubcategorias().subscribe(res=>{
        this.subcategorias = res
        
        
      })
    }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
