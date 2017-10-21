import { Component, OnInit } from '@angular/core';
import { TimeSheetDataService } from '../../services/time-sheet-data.service';
import { Employee } from '../../classes/app.employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];
  constructor(private timeSheetDataService : TimeSheetDataService) { }

  ngOnInit() {

  }


}
