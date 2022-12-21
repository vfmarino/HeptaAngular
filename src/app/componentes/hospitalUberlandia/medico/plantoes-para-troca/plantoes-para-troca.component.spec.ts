import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantoesParaTrocaComponent } from './plantoes-para-troca.component';

describe('PlantoesParaTrocaComponent', () => {
  let component: PlantoesParaTrocaComponent;
  let fixture: ComponentFixture<PlantoesParaTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantoesParaTrocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantoesParaTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
