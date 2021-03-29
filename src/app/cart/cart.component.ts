import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemName: any;

  constructor(private route: Router) {
    this.itemName = this.route.getCurrentNavigation().extras.state.item;
   }

  ngOnInit(): void {
  }

  getOrderDetails(){
    
  }

}
