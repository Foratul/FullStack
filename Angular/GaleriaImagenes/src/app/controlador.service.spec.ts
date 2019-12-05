import { TestBed } from '@angular/core/testing';

import { ControladorService } from './controlador.service';

describe('ControladorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControladorService = TestBed.get(ControladorService);
    expect(service).toBeTruthy();
  });
});
