import { Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';
import { Reservation } from '../models/reservations';



@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {
  
  start: any;
  end: any;

   
  constructor( private route: ActivatedRoute, private dialog: MatDialog){
    
  }
  a
 
  parsedStart: any;
  parsedEnd: any;
  
  dateParser(type: string, event: MatDatepickerInputEvent<Date>, miliSecondValue: number) {
    let eventValue
    let stringValue: any;
    
    eventValue = event.value
    stringValue = eventValue?.toString()
    miliSecondValue = Date.parse(stringValue)
    console.log(miliSecondValue)
    return miliSecondValue
    
  }
  
  intoDays(start: number, end: number) {
    let nbOfDays = ((end - start) * 86400000)/24
    console.log(nbOfDays)
    return nbOfDays
    
    
  
    
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      width: '250px',
      data: { reservation_start: this.start, 
              reservation_end: this.end,  
              duration: ((Date.parse(this.end) - Date.parse(this.start))/(1000*60*60*24)),
              car_id: this.paramsData
            }

    });

    console.log(dialogRef)
    
  }
  
  paramsData: any

  
  
  ngOnInit(): void {
  
  }
  
  ngAfterContentInit(): void {
    
    this.route.url.subscribe(data => {
      this.paramsData = data[1].path
    });
  }

}
