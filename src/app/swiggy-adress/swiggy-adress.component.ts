import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../models/Items';
import { LoginService } from '../services/login.service';
import { SwiggyService } from '../services/swiggy.service';

@Component({
  selector: 'app-swiggy-adress',
  templateUrl: './swiggy-adress.component.html',
  styleUrls: ['./swiggy-adress.component.css']
})
export class SwiggyAdressComponent implements OnInit {

 username : any;
 allAdressData : any;
 totalItems :Array<Items> = [];
 amountToPay : any;
 itemCount : any;
 subTotal : any;

  constructor(private route: Router, private loginService : LoginService, private swiggyService: SwiggyService) { }

  ngOnInit(): void {
    // this.username =this.loginService.userName;
    this.getCustomerAddress();
   this.totalItems = this.swiggyService.getCartData();
   this.getSubTotalAmount();
  }

 

getCustomerAddress(){
  this.swiggyService.getCustomerAddress(this.loginService.userName).subscribe((data: any) => {
    this.allAdressData=data; 
  });
  
} 

getSubTotalAmount(){

  this.subTotal  = this.totalItems.reduce((sum, item) => sum + Number(item.price), 0);
  this.itemCount = this.totalItems.reduce((sum, item) => sum + Number(item.count), 0);
  this.amountToPay = this.subTotal +50 +30;
}

goToPayment(){

  const addressData = this.allAdressData.find(e => e.name === this.loginService.userName);
  this.swiggyService.customerId=addressData.customerId;
  this.route.navigate(['swiggyPayment']);
}

}
