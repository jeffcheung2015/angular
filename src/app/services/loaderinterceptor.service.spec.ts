import { TestBed, inject } from '@angular/core/testing';

import { LoaderinterceptorService } from './loaderinterceptor.service';

describe('LoaderinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderinterceptorService]
    });
  });

  it('should be created', inject([LoaderinterceptorService], (service: LoaderinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
