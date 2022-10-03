import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-services/http-service.service';
import { Car } from '../models/cars';
import { catchError, retry, map } from 'rxjs';

@Component({
  selector: 'app-all-cars-section',
  templateUrl: './all-cars-section.component.html',
  styleUrls: ['./all-cars-section.component.css']
})
export class AllCarsSectionComponent implements OnInit {

  allCars: Car[] = [];

  subscribingtoFetchAllCars() {
    this.httpService.fetchAllCars()
      .pipe(map((res ) => {
        const cars = [];
        for(const key in res){
            if(res.hasOwnProperty(key)) {
                this.allCars.push({...res[key], _id: key})
            }
        }
        return this.allCars;
    }))
    .subscribe(
        (cars) => {
            this.allCars = cars;
        }
        )
    
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.subscribingtoFetchAllCars();
    this.allCars;
  }

}
