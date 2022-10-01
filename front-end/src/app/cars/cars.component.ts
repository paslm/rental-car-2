import { Component, OnInit } from '@angular/core';
import { Car } from '../models/cars';
import { Form } from '@angular/forms';
import { HttpService } from '../http-services/http-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  

  constructor( private httpService:HttpService) { }

  ngOnInit(): void {
    // this.httpService.fetcHttpServicehCars()
    // this.fetchACar()
    
  }

}
