import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Loading } from 'notiflix';
import { ModalsubcategoriasComponent } from '../modales/modalsubcategorias/modalsubcategorias.component';
import { CartService } from '../servicios/cart.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  products:any
  q:string

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private servicio:ProductosService,
    private rutas:Router,
    private conexcart:CartService,) { }

  ngOnInit() {
    Loading.pulse()
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
