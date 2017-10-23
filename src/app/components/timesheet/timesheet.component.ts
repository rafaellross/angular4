import { Component, OnInit } from '@angular/core';
import { TimeSheetDataService } from '../../services/time-sheet-data.service';
import { Employee } from '../../classes/app.employee';
import {Weekday, ListWeekDays} from '../../classes/weekday';
import {Week} from '../../classes/week';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  Today: Date;
  Oldest: Date;
  ListWeeks: Week[];
  constructor(private timeSheetDataService : TimeSheetDataService) { }
  weekDays: Weekday[] = ListWeekDays;
  selecteds: Employee[];
  ngOnInit() {    
    if(this.timeSheetDataService.selecteds === undefined){
      this.selecteds = [];
    }else{
      this.selecteds = this.timeSheetDataService.selecteds;
    }
    this.Today = new Date(Date.now());        
    this.Oldest = new Date();
    this.Oldest.setDate(this.Today.getDate()-30);
    

    let currWeek: Week = new Week();
    this.ListWeeks = [];
    for (var index = this.Oldest; index < this.Today; index.setDate(index.getDate()+1)) {
        
        if(index.getDay() === 1){          
          currWeek.Start = new Date(index.valueOf());
          console.log(currWeek.Start);
        }
        if(index.getDay() === 0){          
          currWeek.End = new Date(index.valueOf());
          this.ListWeeks.push(currWeek);    
          console.log(this.ListWeeks);
        }      
    }
  }
  save(){
    this.timeSheetDataService.selecteds = [];
  }

  hours(start = 0){
    let result: number[] = [];
    for (var index =  Number(start); index < (60*24); index +=15) {
      result.push(index);      
    }  
    return result;
  }

}
