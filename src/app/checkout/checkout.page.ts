import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  q:string
  constructor( private rutas:Router,) { }

  ngOnInit() {
  }

  search(){
  
    this.rutas.navigateByUrl("Search/"+this.q)
      }


}
