import { TestBed } from '@angular/core/testing';

import { HpHousesService } from './hp-houses.service';

describe('HpHousesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HpHousesService = TestBed.get(HpHousesService);
    expect(service).toBeTruthy();
  });
});
