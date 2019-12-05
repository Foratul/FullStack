import { TestBed, async, inject } from '@angular/core/testing';

import { ComprobadorGuard } from './comprobador.guard';

describe('ComprobadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComprobadorGuard]
    });
  });

  it('should ...', inject([ComprobadorGuard], (guard: ComprobadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
