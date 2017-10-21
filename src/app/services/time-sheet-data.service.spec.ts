import { TestBed, inject } from '@angular/core/testing';

import { TimeSheetDataService } from './time-sheet-data.service';

describe('TimeSheetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeSheetDataService]
    });
  });

  it('should be created', inject([TimeSheetDataService], (service: TimeSheetDataService) => {
    expect(service).toBeTruthy();
  }));
});
