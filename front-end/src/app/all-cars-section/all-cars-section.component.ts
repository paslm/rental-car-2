import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http-services/http-service.service';
import { Car } from '../models/cars';
import { catchError, retry, map, take, toArray } from 'rxjs';

@Component({
  selector: 'app-all-cars-section',
  templateUrl: './all-cars-section.component.html',
  styleUrls: ['./all-cars-section.component.css']
})
export class AllCarsSectionComponent implements OnInit {

  allCars = [];


  
  
  callFetchCars() {
   this.httpService.fetchAllCars()
     .subscribe( (data) => {
       this.allCars = data
       return this.allCars
     })
     // return this.allCars
  }


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.callFetchCars()
    this.allCars;
    // console.log(this.allCars)
  }

}
