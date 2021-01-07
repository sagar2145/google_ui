import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SwiggyService} from "../../services/swiggy.service";

@Component({
  selector: 'app-swiggy-items',
  templateUrl: './swiggy-items.component.html',
  styleUrls: ['./swiggy-items.component.css']
})
export class SwiggyItemsComponent implements OnInit {

  Arr = Array;
  // restData: Array<{imgURL:string,resName:string,resItem:string,resRating:string,
  // deliveryTime:string,discount:string,offer:string}>;
  // resData: any = [{imgURL:string,resName:string,resItem:string,resRating:string,
  //  deliveryTime:string,discount:string,offer:string}];
  resData: any;

 num:number=10;

  constructor(private route: Router, private swiggyService: SwiggyService) { }

  ngOnInit(): void {

this.display();
     
  
  }

  display(){
  this.swiggyService.getSwiggyItems().subscribe((data: any) => {
       this.resData=data; 
     });
}

showMenu(data){
    console.log(data.resname);
    this.route.navigate(['swiggymenu']);
  }
}

