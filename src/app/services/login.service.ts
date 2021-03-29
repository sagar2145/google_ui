import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Authenticate } from '../models/authenticate';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName = ""

  url: string = "http://localhost:8080/api"

  constructor(private http : HttpClient, private router : Router) { }


  authenticate(authentication : Authenticate){
  return this.http.post<Authenticate>(`${this.url}/login`,authentication);
  }
  
  saveRegisterDetails(user : any){
    return this.http.post(`${this.url}/register`,user);
  }

  // facebookLogin(user : any){
  //   return this.http.get(`${this.url}/login`,user);

  // }
}
