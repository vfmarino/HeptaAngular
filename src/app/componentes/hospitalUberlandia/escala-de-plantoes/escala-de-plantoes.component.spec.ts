import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaDePlantoesComponent } from './escala-de-plantoes.component';

describe('EscalaDePlantoesComponent', () => {
  let component: EscalaDePlantoesComponent;
  let fixture: ComponentFixture<EscalaDePlantoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaDePlantoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaDePlantoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
