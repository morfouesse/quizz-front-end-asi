import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-survey-form-step-survey',
  templateUrl: './survey-form-step-survey.component.html',
  styleUrls: ['./survey-form-step-survey.component.less']
})
export class SurveyFormStepSurveyComponent implements OnInit {

  @Input() public surveyForm!: FormGroup;

  public constructor() { }

  public ngOnInit(): void {
  }

  public isNotEnableSurvey() {
    return !(this.surveyForm?.get('title')?.valid &&
      this.surveyForm?.get('description')?.valid);
  }

}
