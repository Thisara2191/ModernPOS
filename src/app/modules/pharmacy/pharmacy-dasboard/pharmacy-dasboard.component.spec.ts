import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDasboardComponent } from './pharmacy-dasboard.component';

describe('PharmacyDasboardComponent', () => {
  let component: PharmacyDasboardComponent;
  let fixture: ComponentFixture<PharmacyDasboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyDasboardComponent]
    });
    fixture = TestBed.createComponent(PharmacyDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
