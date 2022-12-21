import { TestBed } from '@angular/core/testing';

import { TrocaDePlantaoService } from './troca-de-plantao.service';

describe('TrocaDePlantaoService', () => {
  let service: TrocaDePlantaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocaDePlantaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
