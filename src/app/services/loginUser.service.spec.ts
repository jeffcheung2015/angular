import { TestBed, inject } from '@angular/core/testing';

import { LoginUserService } from './loginUser.service';

describe('LoginUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginUserService]
    });
  });

  it('should be created', inject([LoginUserService], (service: LoginUserService) => {
    expect(service).toBeTruthy();
  }));
});
