import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-payment-header',
  templateUrl: 'payment-header.component.html',
  styleUrls: ['payment-header.component.css']
})
export class PaymentHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  TotalPayment: number;
  InterestRate: number;
  Period: number;
  

}
