import { TestBed } from '@angular/core/testing';

import { SortingHatService } from './sorting-hat.service';

describe('SortingHatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingHatService = TestBed.get(SortingHatService);
    expect(service).toBeTruthy();
  });
});
