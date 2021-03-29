import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import { SwiggyService } from 'src/app/services/swiggy.service';
import { Router } from '@angular/router';
import { Items } from 'src/app/models/Items';

@Component({
  selector: 'app-swiggy-menu',
  templateUrl: './swiggy-menu.component.html',
  styleUrls: ['./swiggy-menu.component.css']
})
export class SwiggyMenuComponent implements OnInit {

  menuData: any;
  resDetails : any;
  id: any;
  items: any;
  menuId: any;
  showCart: boolean;
  cartData: any;
  divs: string[] = [];
  count : any = 0;
  checkId : boolean =false;
  requestCount : any = 0;
  amount : any;
  actualPrice : any = 0;
  subTotal : any;
  itemCount : any;

  totalItems :Array<Items> = [];

  constructor(private route: Router, private swiggyService: SwiggyService) { 
   this.id = this.route.getCurrentNavigation().extras.state.swiggyId;
  }

  ngOnInit(): void {
  this.getSwiggyMenu();
   this.getRestDetails();
  }


getRestDetails(){
  this.swiggyService.getRestDetails(this.id).subscribe((data : any) => {

    this.resDetails = data;

  });
}

getSwiggyMenu(){
  

  this.swiggyService.getSwiggyMenuItems(this.id).subscribe((data : any) => {

    this.menuData = data;

  });
}

// createDiv(): void {
//   this.divs.push(this.divs.length);
// }

// removeDiv(): void {
//   this.divs.unshift(this.divs.length);
// }

AddToCart(id){

  this.showCart=true;
  
  this.menuId=id;

  if(this.requestCount > 0){
   this.checkId = this.checkOrder(id);
  }
  
  if(!this.checkId){

  this.swiggyService.getMenuDetails(this.menuId).subscribe((data : any) => {

    this.cartData = data;

    let customCart = new Items();

    customCart.itemName = this.cartData.itemName;
    customCart.price = this.cartData.price;
    customCart.id = this.cartData.id;
    customCart.count = 1;



    this.totalItems.push(customCart);

    

    this.actualPrice = this.cartData.price;

    this.requestCount++;
    this.getSubTotalAmount();

  });
}else{
  const menuID = this.totalItems.find(e => e.id === id);

  const targetId = this.totalItems.map(e => e.id).indexOf(id);
  this.totalItems[targetId].count = menuID.count + 1;
   this.amount = this.actualPrice * menuID.count;
  this.totalItems[targetId].price = this.amount;
  this.getSubTotalAmount();
  // this.totalItems.find(e => e.id == id).count = 3;
}
}

checkOrder(id : any){

 this.checkId = this.totalItems.some(x => x.id === id);

 return this.checkId;

}

add(item : any){

  const menuID = this.totalItems.find(e => e.id === item.id);

  const targetId = this.totalItems.map(e => e.id).indexOf(item.id);
  this.totalItems[targetId].count = menuID.count + 1;
  this.amount = this.actualPrice * menuID.count;
  this.totalItems[targetId].price = this.amount;

  this.getSubTotalAmount();
}

remove(item : any){
  const menuID = this.totalItems.find(e => e.id === item.id);

  const targetId = this.totalItems.map(e => e.id).indexOf(item.id);
  this.totalItems[targetId].count = menuID.count - 1;
  this.amount = this.actualPrice * menuID.count;
  this.totalItems[targetId].price = this.amount;
  this.getSubTotalAmount();
}

getSubTotalAmount(){

  this.subTotal  = this.totalItems.reduce((sum, item) => sum + Number(item.price), 0);
  this.itemCount = this.totalItems.reduce((sum, item) => sum + Number(item.count), 0);
}

 checkOut(){
   this.swiggyService.setCartData(this.totalItems);
  this.route.navigate(['swiggyAddress'],{ state: { swiggyId: this.id }});
 }

}