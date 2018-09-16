import { TestBed, inject } from '@angular/core/testing';

import { PddcampaigntransactionService } from './pddcampaigntransaction.service';

describe('PddcampaigntransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PddcampaigntransactionService]
    });
  });

  it('should be created', inject([PddcampaigntransactionService], (service: PddcampaigntransactionService) => {
    expect(service).toBeTruthy();
  }));
});
