import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


import { Injectable } from "@angular/core";
import { Car } from "../models/cars";
@Injectable({
    providedIn:"root",
})

export class HttpService {
    // LESS OP: Review Constructor Role in Angular classes/TypeScript
    constructor(private http: HttpClient) {


    }

    backEndUrl = "http://localhost:3000/rental-car/cars";
    allCars: Car[] = [];
    
    fetchAllCars() {
        this.http.get<{[key:string]: Car}>(this.backEndUrl)
        .pipe(map((res ) => {
            const cars = [];
            for(const key in res){
                if(res.hasOwnProperty(key)) {
                    this.allCars.push({...res[key], id: key})
                }
            }
            return this.allCars;
        }))
        .subscribe(
            (cars) => {
                console.log(cars);
                this.allCars = cars;
            }
        )
    }

}   