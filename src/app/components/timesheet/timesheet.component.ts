import { Component, OnInit } from '@angular/core';
import { TimeSheetDataService } from '../../services/time-sheet-data.service';
import { Employee } from '../../classes/app.employee';
import {Weekday, ListWeekDays} from '../../classes/weekday';
import {Week} from '../../classes/week';
import * as moment from 'moment';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {
  Today: moment.Moment;
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
    //Initialize ListWeeks
    this.ListWeeks = [];

    //Set today date
    this.Today = moment();        
    
    this.ListWeeks.push({Start: this.Today.startOf('week').add(1, 'day').toDate(), End: this.Today.endOf('week').add(1, 'day').toDate()})
    
    this.Today.subtract(2, 'week');
    this.ListWeeks.push({Start: this.Today.startOf('week').add(1, 'day').toDate(), End: this.Today.endOf('week').add(1, 'day').toDate()})        
    
    this.Today.subtract(2, 'week');
    this.ListWeeks.push({Start: this.Today.startOf('week').add(1, 'day').toDate(), End: this.Today.endOf('week').add(1, 'day').toDate()})        

    this.Today.subtract(2, 'week');
    this.ListWeeks.push({Start: this.Today.startOf('week').add(1, 'day').toDate(), End: this.Today.endOf('week').add(1, 'day').toDate()})        
  }

  render(week: Week){
      var result = [];
      for(var i = 0; i < 7; i++){
        var date = moment(week.Start).add(i, 'day');
        var day = new Weekday();
        day.Name = this.weekDays[date.weekday()].Name;
        day.Number = date.weekday();
        result.push({Day: day,Date: date.format("D/M/YYYY"),Start: this.hours(), End: this.hours(), StartSelected: false});
      }
      return result;
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
