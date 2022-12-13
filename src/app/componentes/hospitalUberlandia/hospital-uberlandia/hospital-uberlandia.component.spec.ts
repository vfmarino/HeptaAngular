import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUberlandiaComponent } from './hospital-uberlandia.component';

describe('HospitalUberlandiaComponent', () => {
  let component: HospitalUberlandiaComponent;
  let fixture: ComponentFixture<HospitalUberlandiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalUberlandiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalUberlandiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
