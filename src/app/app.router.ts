import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './components/home/home.component';
import {SelectComponent} from './components/select/select.component';
import { TimesheetNewComponent } from './components/timesheet-new/timesheet-new.component';
import { TimesheetEditComponent } from './components/timesheet-edit/timesheet-edit.component';
import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },    
    {
        path: 'home',
        component: HomeComponent
    },    
    {
        path: 'select',
        component: SelectComponent
    },
    {
        path: 'timesheet.new',
        component: TimesheetNewComponent
    },
    {
        path: 'timesheet.edit',
        component: TimesheetEditComponent
    },    
    {
        path: 'manage',
        component: ManageComponent
    }
        
       
    
];
export const RoutingModule = RouterModule.forRoot(routes);