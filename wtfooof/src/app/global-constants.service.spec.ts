import { TestBed, inject } from '@angular/core/testing';

import { GlobalConstantsService } from './global-constants.service';

describe('GlobalConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalConstantsService]
    });
  });

  it('should be created', inject([GlobalConstantsService], (service: GlobalConstantsService) => {
    expect(service).toBeTruthy();
  }));
});
