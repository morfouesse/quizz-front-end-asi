import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormStepSurveyComponent } from './survey-form-step-survey.component';

describe('SurveyFormStepSurveyComponent', () => {
  let component: SurveyFormStepSurveyComponent;
  let fixture: ComponentFixture<SurveyFormStepSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormStepSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormStepSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
