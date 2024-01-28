import { Component } from '@angular/core';
import customers  from '../data/customers'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {


  customers  :any;
  display : boolean;
constructor()
{
  this.customers = customers;
  this.display  = true;
  console.log(this.customers);
}



}
