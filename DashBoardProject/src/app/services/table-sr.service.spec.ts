import { TestBed } from '@angular/core/testing';

import { TableSrService } from './table-sr.service';

describe('TableSrService', () => {
  let service: TableSrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
