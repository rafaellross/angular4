import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetNewComponent } from './timesheet-new.component';

describe('TimesheetNewComponent', () => {
  let component: TimesheetNewComponent;
  let fixture: ComponentFixture<TimesheetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
