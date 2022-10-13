import { Component, OnInit } from '@angular/core';
import { projectNewData } from '../data';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }

}
