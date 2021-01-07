import { Component, OnInit } from '@angular/core';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap'
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  register : FormGroup;

  constructor(private httpClient : HttpClient, private loginService : LoginService, private route : Router) { }

  ngOnInit() {
    this.register = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phoneNum: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
  });
  }

Register(user){

  this.loginService.saveRegisterDetails(user).subscribe((user : any) => {

    if(user != null){
      this.route.navigate(['']);
    }

  })
  
}

}
