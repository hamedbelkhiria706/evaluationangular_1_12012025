import { TestBed } from '@angular/core/testing';

import { LivrecrudService } from './livrecrud.service';

describe('LivrecrudService', () => {
  let service: LivrecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
