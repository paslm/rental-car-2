import { Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { AuthService } from '@auth0/auth0-angular';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';
import { Reservation } from '../models/reservations';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {
  
  start: any;
  end: any;
 
   
  constructor( private route: ActivatedRoute, private dialog: MatDialog, public auth: AuthService,){
    
  }
  

  parsedStart: any;
  parsedEnd: any;
  price
  car_name
  
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

//  async fetchUser(): Promise<string | any> {

//     let user_id
//     try {
//       let request = this.auth.getUser()
//       let data = await lastValueFrom(request)
//       user_id = data.sub
//       return user_id
//     }
//     catch(error) {
//       await console.log(error)
//     }

//  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      width: '250px',
      data: { reservation_start: this.start, 
              reservation_end: this.end,  
              duration: ((Date.parse(this.end) - Date.parse(this.start))/(1000*60*60*24)),
              car_id: this.paramsData,
              car_price: parseInt(this.price),
              car_name: this.car_name
            }
            
          });
          
    
  }
  
  paramsData: any

  

  
  
  ngOnInit(): void {
  
    this.route.url.subscribe(data => {
      console.log(data)
      this.paramsData = data[1].path
    });

  }
  
  ngAfterContentInit(): void {
    
    this.route.queryParams.subscribe(
      params => {
        this.price = params['car_price']
        this.car_name = params['car_name']
        console.log(params)

      }
    )
    
  }

}
