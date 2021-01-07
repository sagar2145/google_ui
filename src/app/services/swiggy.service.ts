import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SwiggyService {

 url: string = "http://localhost:8080/api"

  constructor(private http : HttpClient, private router : Router) { }

  
  getSwiggyItems(){
    return this.http.get(`${this.url}/swiggyData`);
  
  }

  getSwiggyMenuItems(){
    return this.http.get(`${this.url}/swiggyMenu`);
  }
  
}
