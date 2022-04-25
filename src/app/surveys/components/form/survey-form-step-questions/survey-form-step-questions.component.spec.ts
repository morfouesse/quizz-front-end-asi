import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormStepQuestionsComponent } from './survey-form-step-questions.component';

describe('SurveyFormStepQuestionsComponent', () => {
  let component: SurveyFormStepQuestionsComponent;
  let fixture: ComponentFixture<SurveyFormStepQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFormStepQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormStepQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
