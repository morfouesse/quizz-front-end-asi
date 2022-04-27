import { TestBed } from '@angular/core/testing';

import { CustomsValidatorsService } from './customs-validators.service';

describe('CustomsValidatorsService', () => {
  let service: CustomsValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomsValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
