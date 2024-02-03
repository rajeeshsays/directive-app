import { Injectable, Injector} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

   response : any;
   constructor(private httpClient : HttpClient ) { 
  

    }


  login() {
    
    const params = new HttpParams()
    .set('UserName', 'rajeeshsays@gmail.com')
    .set('Password', 'Jackpot123#')
    .set('responseType','json');

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params : params
      }

    this.httpClient.post("https://localhost:7152/api/Auth2/login", {'userName' : 'rajeeshsays@gmail.com' , 'password' : 'Jackpot123#'}).subscribe(res => 
    {
      this.response = res;
      console.log(this.response.token);
      window.localStorage.setItem("token",this.response.token);
      return this.response;
    });
    }

   


}
