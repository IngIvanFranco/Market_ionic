import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Notify } from 'notiflix';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private rutas:Router){

  }
  
  canActivate(){
    if (localStorage.getItem('usr') == undefined) {
      Notify.warning('Inicia Sesion para continuar ')
      this.rutas.navigateByUrl('/login')
      return false
    }else{
      
      return true
    }
    
    
   
  }
   
  
}
