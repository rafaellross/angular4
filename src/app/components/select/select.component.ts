import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../../classes/app.employee';
import {TimeSheetDataService} from '../../services/time-sheet-data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})


export class SelectComponent implements OnInit {
  @Input() searchInput: string;
  employees: Employee[];
  selecteds: Employee[];
  dataIsLoaded: boolean;
  constructor(private timeSheetDataService : TimeSheetDataService) { }

  ngOnInit() {
    if(this.timeSheetDataService.selecteds === undefined){
      this.selecteds = [];
    }else{
      this.selecteds = this.timeSheetDataService.selecteds;
    }
    
    this.employees = [];
  }

  search(name: string = ""){
    if(!this.dataIsLoaded){

        this.timeSheetDataService.getEmployees(name)
        .subscribe(data => this.employees = data.filter(f => !this.selecteds.includes(f)));          
        this.dataIsLoaded = true;
    }
  }

  select(employee: Employee){
    
    if(this.selecteds.find(x => x.id === employee.id) === undefined){
      employee.isSelected = true;
      this.selecteds.push(employee);      
    }  
  }

  remove(employee: Employee){    
    if(this.selecteds.find(x => x.id === employee.id) !== undefined){    
      employee.isSelected = false;
      this.selecteds = this.selecteds.filter(item => item !== employee);
    }  
  }
  
}
