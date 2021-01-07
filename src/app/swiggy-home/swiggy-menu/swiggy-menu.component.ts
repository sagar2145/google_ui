import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import { SwiggyService } from 'src/app/services/swiggy.service';

@Component({
  selector: 'app-swiggy-menu',
  templateUrl: './swiggy-menu.component.html',
  styleUrls: ['./swiggy-menu.component.css']
})
export class SwiggyMenuComponent implements OnInit {

  menuData: any;

  constructor(private swiggyService: SwiggyService) { }

  ngOnInit(): void {
  this.getSwiggyMenu();
  }




getSwiggyMenu(){
  this.swiggyService.getSwiggyMenuItems().subscribe((data : any) => {
this.menuData = data;
  });
}
}