import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarPlantaoComponent } from './aceitar-plantao.component';

describe('AceitarPlantaoComponent', () => {
  let component: AceitarPlantaoComponent;
  let fixture: ComponentFixture<AceitarPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceitarPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceitarPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
