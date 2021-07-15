import { TestBed } from '@angular/core/testing';

import { IsAuthorisedGuard } from './is-authorised.guard';

describe('IsAuthorisedGuard', () => {
  let guard: IsAuthorisedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthorisedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
