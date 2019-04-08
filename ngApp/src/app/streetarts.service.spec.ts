import { TestBed, inject } from '@angular/core/testing';

import { StreetartsService } from './streetarts.service';

describe('StreetartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreetartsService]
    });
  });

  it('should be created', inject([StreetartsService], (service: StreetartsService) => {
    expect(service).toBeTruthy();
  }));
});
