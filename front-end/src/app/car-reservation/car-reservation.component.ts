import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

  value: Date[];
  car_id:any;
  upToDateValue:any;
  price:any;
 
   constructor( private route: ActivatedRoute){
     this.value = [];
   }
 
   valueChange(args: any){
     if(args.daySpan != 0){
       console.log(args.endDate)
       this.value.push(args.endDate, args.startDate)
       this.price = args.daySpan * 15
       console.log(this.value)
       console.log(this.price)
     }
   }
 

  ngOnInit(): void {
   this.valueChange(event);
   this.route.queryParams.subscribe(params => {
    this.car_id = params['_id'];
  });
  }

}
