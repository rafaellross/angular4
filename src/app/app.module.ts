import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './app.router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HomeComponent} from './components/home/home.component';
import {SelectComponent} from './components/select/select.component';
import {TimesheetComponent} from './components/timesheet/timesheet.component';
import {TimesheetNewComponent} from './components/timesheet-new/timesheet-new.component';
import {TimesheetEditComponent} from './components/timesheet-edit/timesheet-edit.component';
import {ManageComponent} from './components/manage/manage.component';
import { TimeSheetDataService } from "./services/time-sheet-data.service";
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent,
    TimesheetComponent,
    TimesheetNewComponent,
    TimesheetEditComponent,
    ManageComponent    

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TimeSheetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
