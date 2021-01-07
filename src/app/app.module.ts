import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from 
    '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component'; 
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ZomatoHomeComponent } from './zomato-home/zomato-home.component';
import { SwiggyHomeComponent } from './swiggy-home/swiggy-home.component';
import { DominosHomeComponent } from './dominos-home/dominos-home.component';
import { SwiggyItemsComponent } from './swiggy-home/swiggy-items/swiggy-items.component';
import { SwiggyMenuComponent } from './swiggy-home/swiggy-menu/swiggy-menu.component';
import { MatDialogModule, } from '@angular/material/dialog';
import { PopuploginComponent } from './login/popuplogin/popuplogin.component';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
// import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiggyHelpComponent } from './swiggy-home/swiggy-help/swiggy-help.component';
import { SwiggyHeaderComponent } from './swiggy-home/swiggy-header/swiggy-header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SwiggyOffersComponent } from './swiggy-home/swiggy-offers/swiggy-offers.component'
 import {SwiggyService} from './services/swiggy.service';
import { SwiggySubmenuComponent } from './swiggy-home/swiggy-submenu/swiggy-submenu.component'
const appRoutes: Routes = [

  {
    path: "",
    pathMatch: 'full',
    component: LoginComponent,
  
  },
  {
    path:"homepage",
    component:HomePageComponent
  },
  {
    path:"register",
    component:UserRegistrationComponent
  },
  {
    path:"dominoshome",
    component:DominosHomeComponent
  },
  {
    path:"swiggyhome",
    component:SwiggyHomeComponent
  },
  {
    path:"zomatohome",
    component:ZomatoHomeComponent
  },
  {
    path:"swiggymenu",
    component:SwiggyMenuComponent
  },
  {
    path:"swiggyhelp",
    component:SwiggyHelpComponent
  },
  {
    path:"swiggyoffers",
    component:SwiggyOffersComponent
  }

];

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    UserRegistrationComponent,
    ZomatoHomeComponent,
    SwiggyHomeComponent,
    DominosHomeComponent,
    SwiggyItemsComponent,
    SwiggyMenuComponent,
    PopuploginComponent,
    SwiggyHelpComponent,
    SwiggyHeaderComponent,
    SwiggyOffersComponent,
    SwiggySubmenuComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    CarouselModule,
    MatExpansionModule
  ],
  providers: [SwiggyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
