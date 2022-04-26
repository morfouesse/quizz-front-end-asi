import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormStepQuestionsAnswersComponent } from './survey-form-step-questions-answers.component';

describe('SurveyFormStepQuestionsAnswersComponent', () => {
  let component: SurveyFormStepQuestionsAnswersComponent;
  let fixture: ComponentFixture<SurveyFormStepQuestionsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormStepQuestionsAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormStepQuestionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
