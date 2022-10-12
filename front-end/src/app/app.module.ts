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

const appRoutes : Routes = [
  {path: '', component: HeroSectionComponent},
  {path: 'about-section', component: AboutSectionComponent},
  {path: 'contact-section', component: ContactSectionComponent}
];



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
    ContactSectionComponent
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
  ],
  providers: [HeroSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
