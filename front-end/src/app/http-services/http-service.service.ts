import { HttpClient } from "@angular/common/http";
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


import { Injectable } from "@angular/core";
import { Car } from "../models/cars";
import { CarsComponent } from "../cars/cars.component";
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
    fetchAllCars() {
        this.http.get<{[key:string]: Car}>(this.backEndUrl)
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
        
        // GET 1 CAR
        fetchOneCar(){
            return this.http.get<Car>(this.backEndUrl + this.justAndId)
        } 
    

        //  fetchingCar(): Observable<object> {
        //      let possibleCar: Car | any;
        //      let placeHolderValue: any;
        //      new Observable((observer) => {
        //         possibleCar =   this.http.get<Car>(this.backEndUrl + this.justAndId)
        //        if(possibleCar) {
        //          placeHolderValue = observer.next(possibleCar);
        //          return placeHolderValue
        //        }
        //        else {
        //         placeHolderValue = observer.error("There's currently no car")
        //        }
        //     })
            
        //     return placeHolderValue
        //  }

        // fetchCar = new Observable((observer) => {
        //    let possibleCar
        //    let car: Car;
        //    possibleCar =  this.http.get<Car>(this.backEndUrl + this.justAndId)
           
        //    if(possibleCar && typeof possibleCar === typeof car ){
        //         observer.next(possibleCar)
        //    }
        //    else {
        //     console.log( observer.error(Error))
        //    }
            
        // })

        //  fetchOneCar(){
        //     this.fetchCar.subscribe({
        //         next(possibleCar) {
        //             console.log(possibleCar)
        //         }
        //     })
           
        //  }

        
        // //GET 1 CAR
        //  fetchOneCar(id: string, componentCar: any| Car): any {
        //     new Observable((observer) => {
        //         let returnCar: any | Car;
        //       returnCar =  this.http.get<Car>(this.backEndUrl + id)
        //         .subscribe({
        //             next(returnCar) {
        //                 console.log(returnCar)
        //                 componentCar = returnCar
        //             },
        //             error(msg){
        //                 console.log(msg)
        //             }
        //         })
        //         return componentCar
        //     })
        // }

    }