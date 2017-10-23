import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/app.employee';
import { TimeSheetDataService } from '../../services/time-sheet-data.service';

@Component({
  selector: 'app-timesheet-new',
  templateUrl: './timesheet-new.component.html',
  styleUrls: ['./timesheet-new.component.css']
})
export class TimesheetNewComponent implements OnInit {

  constructor(private timeSheetDataService : TimeSheetDataService) { }
  selecteds: Employee[];
  ngOnInit() {
    if(this.timeSheetDataService.selecteds === undefined){
      this.selecteds = [];
    }else{
      this.selecteds = this.timeSheetDataService.selecteds;
    }    
    console.log(this.selecteds);
  }

  save(){
    this.timeSheetDataService.selecteds = [];
  }

}
