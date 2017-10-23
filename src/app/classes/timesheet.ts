import { Employee } from "./app.employee";
import { Weekday } from "./weekday";

export class Timesheet {
    id: number;
    date: Date;
    employees: Employee[];
    start: number;
    end: number;
    interval: number;
    weekDay: Weekday;
}