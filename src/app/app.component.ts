import { Component } from '@angular/core';
import { LoginService } from './services/login-.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive-app';
  constructor(private loginService :LoginService)
  {
   
  }

  login()
  {
    console.log("Login reached");
    var token = this.loginService.login();
    //console.log(token);
  }
}
