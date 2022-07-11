import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UsrService {
	private api:String = Api.url;
  constructor(private http:HttpClient) { }


  login(datosusr){
    return this.http.post(`${this.api}?login`,datosusr);
  }


}
