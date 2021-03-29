import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PopuploginComponent } from '../login/popuplogin/popuplogin.component';
import { LoginComponent } from '../login/login.component';
// import { MatDialogRef} from '@angular/material/dialog'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-swiggy-home',
  templateUrl: './swiggy-home.component.html',
  styleUrls: ['./swiggy-home.component.css']
})
export class SwiggyHomeComponent implements OnInit {



  constructor() {}

  ngOnInit() {
    // this.slides = this.chunk(this.cards, 3);
  }

  

  slidesStore = [
    {
      id:1,
      src:'assets/swiggyimages/bajrangi.jpg',
      alt:'Image_1',
      title:'Bar and Restaurant'
    },
    {
      id:2,
      src:'assets/swiggyimages/bar.jpg',
      alt:'Image_2',
      title:'Leon Grill'
    },
    {
      id:3,
      src:'assets/swiggyimages/noor.jpg',
      alt:'Image_3',
      title:'Punjabi Dhaba'
    },
    {
      id:4,
      src:'assets/swiggyimages/bajrangi.jpg',
      alt:'Image_4',
      title:'Noor Dhaba'
    },
    {
      id:5,
      src:'assets/swiggyimages/bar.jpg',
      alt:'Image_5',
      title:'Mashoor Dhaba'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    // navText:[ "<i class='fa fa-chevron-left'></i>",
    // "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  
}
