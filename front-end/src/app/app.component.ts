import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpService } from './services/http-services/http-service.service';
import { Car } from './models/cars';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World';

  car: Car;

  testLog() {
    console.log(this.httpService.fetchOneCar())
  }
  // carLog(){
  //   console.log(this.httpService.fetchOneCar('632b617ce9b09da6f0540d5d', this.car))
  // }
  heroLog(){
    // console.log(this.heroSection.heroBannerCar)
  }
  
  constructor(private http: HttpClient, private httpService: HttpService, private titleService: Title, private metaService: Meta, private heroSection: HeroSectionComponent){
    

    this.testLog()
    
    // this.heroLog()
    // this.carLog()
    titleService.setTitle("rental-car")
    metaService.addTags(
      [
        {charset:"UTF-8"},
        {content: "width=device-width, initial-scale=1.0"},
        {httpEquiv: "X-UA-Compatible"},
        {content: " I-E=edge"},
        
        
      ]
    )
    
  }
  
  ngOnInit(): void {
   
    //LESS OP: Reviwe ngOnInit role in Angular
    //Fetch Product
    // this.fetchACar()
  }
}
