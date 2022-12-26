import { TestBed } from '@angular/core/testing';

import { MotivosTrocaService } from './motivos-troca.service';

describe('MotivosTrocaService', () => {
  let service: MotivosTrocaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivosTrocaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
