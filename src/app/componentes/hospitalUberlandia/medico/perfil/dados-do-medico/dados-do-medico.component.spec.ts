import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoMedicoComponent } from './dados-do-medico.component';

describe('DadosDoMedicoComponent', () => {
  let component: DadosDoMedicoComponent;
  let fixture: ComponentFixture<DadosDoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosDoMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
