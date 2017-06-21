import { TestBed, inject } from '@angular/core/testing';

import { CreateConfService } from './create-conf.service';

describe('CreateConfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateConfService]
    });
  });

  it('should be created', inject([CreateConfService], (service: CreateConfService) => {
    expect(service).toBeTruthy();
  }));
});
