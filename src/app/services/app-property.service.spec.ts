import { TestBed } from '@angular/core/testing';

import { AppPropertyService } from './app-property.service';

describe('AppPropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPropertyService = TestBed.get(AppPropertyService);
    expect(service).toBeTruthy();
  });
});
