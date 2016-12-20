import { Injectable } from '@angular/core';
import {Payment} from '../models/Payment'


@Injectable()
export class PaymentManagerService {

  constructor() { }
  allPayments: Payment[];
   CaclulatePayments(totalPayment:number,period:number,interestRate:number): Array<Payment> 
   {
//  this.allPayments=new  Payment[];
          let p1=new Payment();
         
          p1.DueDate= new Date('1968-11-16T00:00:00'); 
          
          var a, b, x;
          var monthlyPayment;
           a = (1 + interestRate / 1200);
           b = period;
           x = Math.pow(a,b);
           x = 1 / x;
           x = 1 - x;
           monthlyPayment = (totalPayment) * (interestRate / 1200) / x;
           var principlePaid = monthlyPayment - interestRate;
           p1.Payment=monthlyPayment;
           p1.Interest=interestRate;
           p1.Principle = principlePaid;
          //this.allPayments.push(p1);

          return  [p1];

   }

}

