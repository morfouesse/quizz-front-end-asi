import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormStepperComponent } from './survey-form-stepper.component';

describe('SurveyFormStepperComponent', () => {
  let component: SurveyFormStepperComponent;
  let fixture: ComponentFixture<SurveyFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
