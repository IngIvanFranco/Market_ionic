import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
	private api:String = Api.url;
  constructor(private http:HttpClient) { }

getproductsgg(){
  return this.http.get(`${this.api}?productosggpromo=1`);
}

getproductsdescuento(){
  return this.http.get(`${this.api}?productosdescuento=1`);
}

getproductssubcate(id){
  return this.http.get(`${this.api}?prodsubcate=${{id}}`);
}

getproduct(id){
  return this.http.get(`${this.api}?consultarproducto=${{id}}`);
}


getproductsearhc(q){
  return this.http.get(`${this.api}?consultarproductos=${{q}}`);
}


getproductscategory(id){
  return this.http.get(`${this.api}?listarproductos=${{id}}`);
}


}


