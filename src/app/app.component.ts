import { Component,Input } from '@angular/core';
import { GridList } from '../app/list';
import {PaymentComponent} from '../app/payment'
import {PaymentHeaderComponent}  from '../app/payment-header'
import {Payment} from './models/Payment'
import {PaymentManagerService}  from './services/payment-manager.Service'
import {NavbarComponent} from '../app/navbar'

//import {KendoValueAccessor} from './node_modules/kendo-ui-core';
//,View, bootstrap, FORM_DIRECTIVES, ControlGroup, Control 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PaymentComponent,PaymentHeaderComponent,NavbarComponent],
  providers:[PaymentManagerService]
  
})

export class AppComponent {
  @Input() GridList : PaymentComponent[];
  title = 'LOAN PAYMENT';
  liste = GridList;
  PresentValue;
  InteresRate;
  Period;
  payment : Payment;
  // payment = new PaymentComponent();
  b: number;
  x: number;
  monthlyPayment:number;
  CurrentService: PaymentManagerService;
  allPayment: Payment[];
  constructor(myService: PaymentManagerService) {
    this.CurrentService=myService;
    // this.allPayment= this.CurrentService.CaclulatePayments(this.PresentValue,this.InteresRate,this.Period);
   }

  listele()
  {
    alert(5555555555555555);
    
    
     this.allPayment  = this.CurrentService.CaclulatePayments(this.PresentValue,this.InteresRate,this.Period);
  }
 
}
