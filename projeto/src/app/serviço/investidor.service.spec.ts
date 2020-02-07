import { TestBed } from '@angular/core/testing';

import { InvestidorService } from './investidor.service';

describe('InvestidorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestidorService = TestBed.get(InvestidorService);
    expect(service).toBeTruthy();
  });
});
