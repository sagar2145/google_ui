import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../models/Items';
import { LoginService } from '../services/login.service';
import { SwiggyService } from '../services/swiggy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalItems :Array<Items> = [];
  address : any;

  prefPayment : boolean = false;
  walletPay : boolean = false;
  cardPay : boolean = false;
  UPIPay : boolean = false;
  netBankingPay : boolean = false;
  foodcardPay : boolean = false;
  cash : boolean = false;
  creditPay : boolean = false;

  constructor(private route: Router, private loginService : LoginService, private swiggyService: SwiggyService) { 
    this.totalItems = this.swiggyService.getCartData();
    this.getAddress();
  }

  ngOnInit(): void {
  }


  getAddress(){
    this.swiggyService.getAddress(this.swiggyService.customerId).subscribe((data: any) => {
      this.address=data; 
    });
    
  }

  changeAddress(){
    this.route.navigate(['swiggyAddress']);
  }

  preferredPayment(){
    this.prefPayment =true;
    this.walletPay = false;
    this.cardPay = false;
    this.UPIPay = false;
    this.netBankingPay = false;
    this.foodcardPay = false;
    this.cash = false;
    this.creditPay = false;
  }

  wallet(){
    this.walletPay =true;
    this.prefPayment = false;
    this.cardPay = false;
    this.UPIPay = false;
    this.netBankingPay = false;
    this.foodcardPay = false;
    this.cash = false;
    this.creditPay = false;
  }


  cardPayment(){
    this.cardPay = true;
    this.walletPay = false;
    this.prefPayment = false;
    this.UPIPay = false;
    this.netBankingPay = false;
    this.foodcardPay = false;
    this.cash = false;
    this.creditPay = false;
  }

  UPIPayment(){
    this.UPIPay = true;
    this.walletPay = false;
    this.cardPay = false;
    this.prefPayment = false;
    this.netBankingPay = false;
    this.foodcardPay = false;
    this.cash = false;
    this.creditPay = false;
  }

  netBanking(){
    this.netBankingPay = true;
    this.walletPay = false;
    this.cardPay = false;
    this.UPIPay = false;
    this.prefPayment = false;
    this.foodcardPay = false
    this.cash = false;
    this.creditPay = false;
  }

  foodCard(){
     this.foodcardPay = true;
     this.walletPay = false;
     this.cardPay = false;
     this.UPIPay = false;
     this.prefPayment = false;
     this.netBankingPay = false;
     this.cash = false;
     this.creditPay = false;
  }

  cashPay(){
     this.cash = true;
     this.foodcardPay = false;
     this.walletPay = false;
     this.cardPay = false;
     this.UPIPay = false;
     this.prefPayment = false;
     this.netBankingPay = false;
     this.creditPay = false;

  }

  credit(){
    this.creditPay = true;
    this.cash = false;
     this.foodcardPay = false;
     this.walletPay = false;
     this.cardPay = false;
     this.UPIPay = false;
     this.prefPayment = false;
     this.netBankingPay = false;

  }
  

  payOnDelivery(){
    
  }

}
