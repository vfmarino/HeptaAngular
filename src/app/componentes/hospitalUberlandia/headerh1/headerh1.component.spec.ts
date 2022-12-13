import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerh1Component } from './headerh1.component';

describe('Headerh1Component', () => {
  let component: Headerh1Component;
  let fixture: ComponentFixture<Headerh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Headerh1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
