import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-services/http-service.service';
import { Observable } from 'rxjs';
import { Car } from '../models/cars';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  
  heroBannerCar: Car;

  // heroBannerCar: Car = this.httpService.fetchOneCar('632b617ce9b09da6f0540d5d')

  subscribingToFetchOneCar() {
    this.httpService.fetchOneCar()
    .subscribe((data) =>  this.heroBannerCar = {
      _id: data._id,
      name: data.name,
      picpath: data.picpath,
      ppday: data.ppday,
      availableOrNot: data.availableOrNot
      
    })
    return this.heroBannerCar
  }
   constructor( private httpService:HttpService) { 
     
    //  this.heroBannerCar = this.httpService.fetchOneCar('632b617ce9b09da6f0540d5d')
  }
  
  ngOnInit(): void {
    this.subscribingToFetchOneCar()
    this.heroBannerCar
    
    // this.httpService.fetchOneCar( '632b617ce9b09da6f0540d5d', this.heroBannerCar)
 
  }
  
}
