import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosDeTrocaComponent } from './motivos-de-troca.component';

describe('MotivosDeTrocaComponent', () => {
  let component: MotivosDeTrocaComponent;
  let fixture: ComponentFixture<MotivosDeTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivosDeTrocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivosDeTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
