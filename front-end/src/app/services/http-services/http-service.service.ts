import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";
import { Car } from "../../models/cars";
import { Reservation } from "src/app/models/reservations";

@Injectable({
    providedIn:"root",
})

export class HttpService {
    // LESS OP: Review Constructor Role in Angular classes/TypeScript
    constructor(private http: HttpClient, private handleError: ErrorHandler) {


    }

    
    backEndUrl = "http://localhost:3000/rental-car/";
    allCars: Car[] = [];
    car: Car;

    justAndId: string = '632b617ce9b09da6f0540d5d';

    //GET ALL CARS
    fetchAllCars() {return this.http.get<Car[]>(this.backEndUrl)}
        
        // GET 1 CAR
     fetchOneCar(){
            return this.http.get<Car>(this.backEndUrl + this.justAndId)
         } 

    fetchReservations(){
    }


    createReservation(reservation: Reservation) {
        const httpOptions = {
            headers: new HttpHeaders()
      }
  
      httpOptions.headers.append('Access-Control-Allow-Origin', '*');
      httpOptions.headers.append('Content-Type', 'application/json');
      httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      
        return this.http.post<Reservation>(this.backEndUrl + `reservation`, reservation, httpOptions)
            .pipe(
                catchError(
                    err => {
                        console.log(err)
                        throw 'error in POST RES. Details:' + err
                    }
                )
            )
    
    }


    checkoutSession(car_price, car_name) {

      let  requiredInfo = {
        price: car_price,
        name: car_name,
        quantity: 1

        }
    
        return this.http.post(this.backEndUrl + `create-checkout-session`, requiredInfo)
        .pipe(
            catchError(
                err => {
                    console.log(err)
                    throw 'error in POST RES. Details:' + err
                }
            )
        )

    }

}