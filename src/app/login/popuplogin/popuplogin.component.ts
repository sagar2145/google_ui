import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popuplogin',
  templateUrl: './popuplogin.component.html',
  styleUrls: ['./popuplogin.component.css']
})
export class PopuploginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.route.navigate(['homepage']);
  }
}
