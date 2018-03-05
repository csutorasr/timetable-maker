import { TestBed, inject } from '@angular/core/testing';

import { TypeormService } from './typeorm.service';

describe('TypeormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeormService]
    });
  });

  it('should be created', inject([TypeormService], (service: TypeormService) => {
    expect(service).toBeTruthy();
  }));
});
