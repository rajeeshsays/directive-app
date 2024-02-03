import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, 
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { parse } from 'path';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuardService implements CanActivate{
  constructor(private authService : AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     console.log("Can activate is hit : "+route.url);
     let token = localStorage.getItem('token') 
     console.log(token);
     if (token) 
     {
        const {DOB}   = JSON.parse(atob(token.split('.')[1])); 
      console.log(DOB);
     }          
     return this.authService.IsAuthorised();
   
  }
}
