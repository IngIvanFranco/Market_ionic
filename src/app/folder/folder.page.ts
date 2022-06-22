import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalsubcategoriasComponent } from '../modales/modalsubcategorias/modalsubcategorias.component';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  products:any

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private servicio:ProductosService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.traerproductos()
  
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalsubcategoriasComponent,
      componentProps: {
        'id': this.folder,
      }
    });
    return await modal.present();
  }

  traerproductos(){
this.servicio.getproductscategory(this.folder).subscribe(res=>{
 this.products=res
  
  
})
  }

}
