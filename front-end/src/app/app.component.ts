import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpService } from './http-services/http-service.service';
import { Car } from './models/cars';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World';

  // fetchACar(){
  //   this.httpService.fetchOneCar
  // }chr
   
   constructor(private http: HttpClient, private httpService: HttpService, private titleService: Title){
    titleService.setTitle("rental-car")
     
  }
  
  ngOnInit(): void {
    //LESS OP: Reviwe ngOnInit role in Angular
    //Fetch Product
    // this.fetchACar()
  }
}
