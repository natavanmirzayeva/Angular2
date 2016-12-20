import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})
export class PaymentComponent  {

  constructor() { }


   
    TotalPayment: number;
    Interest: number;
    Principle: number;
    Date: string;


}
