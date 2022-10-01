import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PromoComponent } from './promo/promo.component';
import { AllCarsSectionComponent } from './all-cars-section/all-cars-section.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MainNavbarComponent,
    HeroSectionComponent,
    PromoComponent,
    AllCarsSectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [HeroSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
