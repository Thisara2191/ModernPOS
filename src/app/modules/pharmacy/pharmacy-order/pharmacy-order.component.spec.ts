import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrderComponent } from './pharmacy-order.component';

describe('PharmacyOrderComponent', () => {
  let component: PharmacyOrderComponent;
  let fixture: ComponentFixture<PharmacyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyOrderComponent]
    });
    fixture = TestBed.createComponent(PharmacyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
