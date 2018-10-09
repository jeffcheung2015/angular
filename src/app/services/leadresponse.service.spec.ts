import { TestBed, inject } from '@angular/core/testing';

import { LeadresponseService } from './leadresponse.service';

describe('LeadresponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadresponseService]
    });
  });

  it('should be created', inject([LeadresponseService], (service: LeadresponseService) => {
    expect(service).toBeTruthy();
  }));
});
