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
      src:'https://i.picsum.photos/id/976/400/250.jpg',
      alt:'Image_1',
      title:'sfsfdsdf'
    },
    {
      id:2,
      src:'https://i.picsum.photos/id/996/400/250.jpg',
      alt:'Image_2',
      title:'afafadsa'
    },
    {
      id:3,
      src:'https://i.picsum.photos/id/400/400/250.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'https://i.picsum.photos/id/316/400/250.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:5,
      src:'https://i.picsum.photos/id/705/400/250.jpg',
      alt:'Image_5',
      title:'Image_5'
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
