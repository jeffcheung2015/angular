import { TestBed, inject } from '@angular/core/testing';

import { EdmService } from './edm.service';

describe('EdmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdmService]
    });
  });

  it('should be created', inject([EdmService], (service: EdmService) => {
    expect(service).toBeTruthy();
  }));
});
