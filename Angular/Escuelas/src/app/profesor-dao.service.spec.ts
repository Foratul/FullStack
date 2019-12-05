import { TestBed } from '@angular/core/testing';

import { ProfesorDAOService } from './profesor-dao.service';

describe('ProfesorDAOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesorDAOService = TestBed.get(ProfesorDAOService);
    expect(service).toBeTruthy();
  });
});
