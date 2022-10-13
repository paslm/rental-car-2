import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpService } from './services/http-services/http-service.service';
import { Car } from './models/cars';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './hero-section/hero-section.component';


import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World';

  car: Car;

  testLog() {
    console.log(this.httpService.fetchOneCar())
  }
  // carLog(){
  //   console.log(this.httpService.fetchOneCar('632b617ce9b09da6f0540d5d', this.car))
  // }
  heroLog(){
    // console.log(this.heroSection.heroBannerCar)
  }
  
  constructor(private http: HttpClient, private httpService: HttpService, private titleService: Title, private metaService: Meta){
    
    this.testLog()
    
    // this.heroLog()
    // this.carLog()
    titleService.setTitle("rental-car")
    metaService.addTags(
      [
        {charset:"UTF-8"},
        {content: "width=device-width, initial-scale=1.0"},
        {httpEquiv: "X-UA-Compatible"},
        {content: " I-E=edge"}, 
      ]
    ) 
  }
  
  ngOnInit(): void {
   
    //LESS OP: Reviwe ngOnInit role in Angular
    //Fetch Product
    // this.fetchACar()
  }
  
}

export class GanttChartComponent{
  // GanttChart section
  public data: object[] = projectNewData;                   //data list in data.ts
  public timelineView: object = {timelineViewmode:"Day"}  // to change from day view to hour view in GanttChart
  //TreeGrid section
  public editOptions: object = {                       //TreeGrid CRUD enabled
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing:true,
    mode: "Auto"
  }
  public toolbarOptions: string[] = ["Add", "Edit", "Update", "Delete", "ExpandAll", "CollapseAll", "Indent", "Outdent" ] //TreeGrid CRUD
  public columnSettings: object[] = [
    {field:"TaskID", headerText:"Task ID"},
    {field:"TaskName", headerText:"Task Name"},
    {field:"startDate", headerText:"startDate", format:"dd-MMM-yy"},
    {field:"Duration", textAlign:"right"}
  ]
  public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    }

}
