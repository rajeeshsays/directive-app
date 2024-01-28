import { Injectable } from '@angular/core';
import Roles from '../data/roles'
import authData from '../data/authdata';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roles : any;
  authData :any;
  route :string;
  role :string;

  constructor() {

     this.roles = Roles;
     this.authData = authData;
     this.route = "customers";
     this.role = "admin";

   }

   IsAuthorised() : boolean
   {
    console.log("is authorised is hit");
    var authEl = authData.filter(el => el.route == this.route)
    return authEl[0].roles.includes(this.role,0);
    
    //return false;
   }




}
