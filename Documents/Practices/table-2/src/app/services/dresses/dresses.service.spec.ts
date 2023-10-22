import { TestBed } from '@angular/core/testing';

import { DressesService } from './dresses.service';

describe('DressesService', () => {
  let service: DressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
