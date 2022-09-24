import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http-services/http-service.service';
import { Car } from './models/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World';
   carList = this.httpService.allCars
   
   constructor(private http: HttpClient, private httpService: HttpService){
     
  }
  
  ngOnInit(): void {
    //LESS OP: Reviwe ngOnInit role in Angular
    this.httpService.fetchAllCars();
    this.httpService.fetchOneCar();
    //Fetch Product
  }
}
