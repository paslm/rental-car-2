import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Reservation } from '../models/reservations';
import { CarReservationComponent } from '../car-reservation/car-reservation.component';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:  {reservation_start: Date, reservation_end: Date, duration: Number, car_id: Number},
    ) { 
  
    }

     daysDifference: any
     
     reservationStart: any = this.data.reservation_start
     reservationEnd: any = this.data.reservation_end
     durationOfRes = this.data.duration
     car_id: any = this.data.car_id


    priceOfRes() {
      return Number(this.durationOfRes) * 15
    }

    

    
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    // openDialog().afterOpened()
    
    ngOnInit(): void {
  }

}
