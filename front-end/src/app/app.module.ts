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
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './services/auth-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


import { AdminSectionComponent } from './admin-section/admin-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';

import { CarReservationComponent } from './car-reservation/car-reservation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';      
import {MatNativeDateModule} from '@angular/material/core';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { SuccessComponent } from './success/success.component';
import { CancelledComponent } from './cancelled/cancelled.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MainNavbarComponent,
    HeroSectionComponent,
    PromoComponent,
    AllCarsSectionComponent,
    AuthButtonComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HomePageComponent,
    CarReservationComponent,
    AdminSectionComponent,
    ClientSectionComponent,
    GanttChartComponent,
    ReservationDialogComponent,
    SuccessComponent,
    CancelledComponent,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-i15iafir.us.auth0.com',
      clientId: 'AScAPG8JPk5QWpQQlCfD1HRcy6Vz88gx'
    }),
     AppRoutingModule,
     BrowserAnimationsModule,
     BrowserAnimationsModule,
     FormsModule,
     ReactiveFormsModule,
     MatButtonModule,
     MatCardModule,
     MatDatepickerModule,
     MatDialogModule,
     MatFormFieldModule,
     MatNativeDateModule,
     HttpClientModule
     
  ],
  providers: [HeroSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
