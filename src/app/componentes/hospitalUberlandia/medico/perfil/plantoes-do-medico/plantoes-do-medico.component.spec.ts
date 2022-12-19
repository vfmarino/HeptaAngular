import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantoesDoMedicoComponent } from './plantoes-do-medico.component';

describe('PlantoesDoMedicoComponent', () => {
  let component: PlantoesDoMedicoComponent;
  let fixture: ComponentFixture<PlantoesDoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantoesDoMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantoesDoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
