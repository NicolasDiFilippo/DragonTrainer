import { TestBed } from '@angular/core/testing';

import { DatiServizioService } from './dati-servizio.service';

describe('DatiServizioService', () => {
  let service: DatiServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatiServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
