import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import { Items } from '../models/Items';

@Injectable({
  providedIn: 'root'
})
export class SwiggyService {

  totalItems :Array<Items> = [];

  customerId = "";

  setCartData(data : Items[]){
    this.totalItems = data;
  }

  getCartData(){
    return this.totalItems;
  }

 url: string = "http://localhost:8080/api"

  constructor(private http : HttpClient, private router : Router) { }

  
  getSwiggyItems(){
    return this.http.get(`${this.url}/swiggyData`);
  
  }

  getSwiggyMenuItems(id : any){
    // let restName = { swiggyId : id};
    return this.http.post(`${this.url}/swiggyMenu`,{swiggyId : id});
  }

  getRestDetails(id : any){
    // let restName = { swiggyId : id};
    return this.http.post(`${this.url}/restDetails`,{swiggyId : id});
  }

  getMenuDetails(menuId : any){
    return this.http.post(`${this.url}/menuDetails`,{id : menuId});
  }

  getCustomerAddress(name : any){
    // let restName = { swiggyId : id};
    return this.http.post(`${this.url}/getCustomerAddress`,{name : name});
  }

  getAddress(id : any){
    // let restName = { swiggyId : id};
    return this.http.post(`${this.url}/getAddress`,{customerId : id});
  }
  
}
