import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Authenticate} from "../models/authenticate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm : FormGroup;
  status:string;
  message:string;


  constructor(private loginService : LoginService, private route : Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
  });
  }


  


  login(){

    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    const authentication = new Authenticate(userName, password);
  
    this.loginService.authenticate(authentication).subscribe((data: any) => {
          
        if(data.status === '200'){
           this.route.navigate(['homepage']);
        }
    });
  }

 




}

