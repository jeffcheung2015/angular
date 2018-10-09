import { TestBed, inject } from '@angular/core/testing';

import { PddService } from './pdd.service';

describe('PddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PddService]
    });
  });

  it('should be created', inject([PddService], (service: PddService) => {
    expect(service).toBeTruthy();
  }));
});
