import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Reservation } from '../models/reservations';
import { AuthService } from '@auth0/auth0-angular';
import { HttpService } from '../services/http-services/http-service.service';
import { end } from '@popperjs/core';
import { ResponseData } from 'src/responseData';


@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>, 
    public auth: AuthService,
    @Inject(MAT_DIALOG_DATA) 
    public data:  {
      reservation_start: Date, 
      reservation_end: Date, 
      duration: number, 
      car_id: number,
      user_id: string,
      car_price: number
      car_name: string
    },
    
    public httpService: HttpService
    ) { 
  
    }

    
    
    daysDifference: any
    reservationStart: any = this.data.reservation_start
    reservationEnd: any = this.data.reservation_end
    durationOfRes = this.data.duration
    car_id: any = this.data.car_id
    car_price: number = this.data.car_price
    car_name: string = this.data.car_name
    username: any
    user_id: string 
 

  
    // callFetchCars() {
    //   this.httpService.fetchAllCars()
    //     .subscribe( (data) => {
    //       this.allCars = data
    //       return this.allCars
    //     })
    //    
    //  }
   
    fetchUser(): string {
      
      this.auth.getUser()
        .subscribe((data) => {
          this.user_id = data.sub
        
        })
        return this.user_id
    }
      
      priceOfRes() {
        return Number(this.durationOfRes) * 15
      }

      
    
  
    
    async saveReservation(user_id, car_id, start_time, end_time, duration, car_price, car_name) {
      let resPrice: number = duration * car_price
      let  reservationObject: Reservation = {
        user_id: user_id,
        car_id: car_id,
        start_time: start_time,
        end_time: end_time,
        duration: duration,
        resPrice: resPrice


      }

  
        this.httpService.createReservation(reservationObject)
        .subscribe(data => {
          console.log(data)
        })

        this.httpService.checkoutSession(resPrice, car_name)
        .subscribe((data: ResponseData) => {
          window.location.href = data.url
          // console.log(data)
        })

    }
  
   

    
     
    onNoClick(): void {
      this.dialogRef.close();
  
    }
    
    ngOnInit(): void {
      console.log(this.data)
      this.fetchUser()
    }
    
 

}
