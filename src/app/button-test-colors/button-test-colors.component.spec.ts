import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTestColorsComponent } from './button-test-colors.component';

describe('ButtonTestColorsComponent', () => {
  let component: ButtonTestColorsComponent;
  let fixture: ComponentFixture<ButtonTestColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonTestColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTestColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
