import { HttpClient } from "@angular/common/http";
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


import { Injectable } from "@angular/core";
import { Car } from "../../models/cars";
import { CarsComponent } from "../../cars/cars.component";
@Injectable({
    providedIn:"root",
})

export class HttpService {
    // LESS OP: Review Constructor Role in Angular classes/TypeScript
    constructor(private http: HttpClient) {


    }

    
    backEndUrl = "http://localhost:3000/rental-car/";
    allCars: Car[] = [];
    car: Car;

    justAndId: string = '632b617ce9b09da6f0540d5d';

    //GET ALL CARS
    fetchAllCars() {return this.http.get<{[key:string]: Car}>(this.backEndUrl)}
        
        // GET 1 CAR
     fetchOneCar(){
            return this.http.get<Car>(this.backEndUrl + this.justAndId)
        } 

    fetchReservations(){
       
    }
    

 

    }