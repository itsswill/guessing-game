import { TestBed } from '@angular/core/testing';

import { GuessingService } from './guessing.service';

describe('GuessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuessingService = TestBed.get(GuessingService);
    expect(service).toBeTruthy();
  });
});
