import { Component, OnInit } from '@angular/core';
import {PaymentComponent} from '../payment'

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [PaymentComponent]
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

 export const GridList: PaymentComponent[] =
[
    {TotalPayment:12,Interest:22,Principle:2,Date:'09/02/11'},
    {TotalPayment:11,Interest:33,Principle:1,Date:'09/09/09'}    
];


