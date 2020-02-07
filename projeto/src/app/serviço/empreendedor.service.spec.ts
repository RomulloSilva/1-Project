import { TestBed } from '@angular/core/testing';

import { EmpreendedorService } from './empreendedor.service';

describe('EmpreendedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpreendedorService = TestBed.get(EmpreendedorService);
    expect(service).toBeTruthy();
  });
});
