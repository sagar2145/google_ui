import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopuploginComponent } from 'src/app/login/popuplogin/popuplogin.component';

@Component({
  selector: 'app-swiggy-header',
  templateUrl: './swiggy-header.component.html',
  styleUrls: ['./swiggy-header.component.css']
})
export class SwiggyHeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(PopuploginComponent,{
      
      width: '400px',
      height: '350px',
      position: {top: '40px'} 
    });
  }
}
