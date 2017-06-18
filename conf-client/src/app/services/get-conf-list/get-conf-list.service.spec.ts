import { TestBed, inject } from '@angular/core/testing';

import { GetConfListService } from './get-conf-list.service';

describe('GetConfListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetConfListService]
    });
  });

  it('should be created', inject([GetConfListService], (service: GetConfListService) => {
    expect(service).toBeTruthy();
  }));
});
