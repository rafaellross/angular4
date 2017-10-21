import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from '../classes/app.employee';

@Injectable()
export class TimeSheetDataService {
  constructor(private http: Http) { }

  getEmployees(name: string){
    return this.http.get('http://localhost/timesheet/list-employees.php?name=' + name)
    .map(response => <Employee[]> response.json().data);
    }
  }
  
