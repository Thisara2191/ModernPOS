import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultActionButtonComponent } from './default-action-button.component';

describe('DefaultActionButtonComponent', () => {
  let component: DefaultActionButtonComponent;
  let fixture: ComponentFixture<DefaultActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultActionButtonComponent]
    });
    fixture = TestBed.createComponent(DefaultActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
