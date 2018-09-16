import { TestBed, inject } from '@angular/core/testing';

import { AgentassignmentService } from './agentassignment.service';

describe('AgentassignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentassignmentService]
    });
  });

  it('should be created', inject([AgentassignmentService], (service: AgentassignmentService) => {
    expect(service).toBeTruthy();
  }));
});
