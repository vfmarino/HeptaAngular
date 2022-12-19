import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaDePlantoesComponent } from './troca-de-plantoes.component';

describe('TrocaDePlantoesComponent', () => {
  let component: TrocaDePlantoesComponent;
  let fixture: ComponentFixture<TrocaDePlantoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaDePlantoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrocaDePlantoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
