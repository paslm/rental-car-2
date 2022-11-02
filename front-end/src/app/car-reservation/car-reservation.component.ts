import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

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
 
   constructor( private route: ActivatedRoute){

   }
 
 

  ngOnInit(): void {

  }

}
