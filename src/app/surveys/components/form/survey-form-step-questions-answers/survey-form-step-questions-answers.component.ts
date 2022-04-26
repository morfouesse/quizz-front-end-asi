import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-survey-form-step-questions-answers',
  templateUrl: './survey-form-step-questions-answers.component.html',
  styleUrls: ['./survey-form-step-questions-answers.component.less']
})
export class SurveyFormStepQuestionsAnswersComponent implements OnInit {

  @Input() public surveyForm!: FormGroup;
  @Input() public questions!: FormArray;
  @Input() public index: number = 0;

  public constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
  }

  isNotEnableAnswer(): boolean | undefined{
    return !this.surveyForm?.get('questions')?.get([0])?.get('answers')?.get([0])?.get('name')?.valid;
  }

  /*
    get answers(): FormArray {
      return this.surveyForm?.get('questions')?.get([0])?.get('answers') as FormArray;
    }*/
  addAnswer(): void {
   // this.answers.push(this.formBuilder.control(''));
    this.answers.push(this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.minLength(5),
        ]],
        goodAnswer: [false, []],
      }
    ));
  }


  get answers(): FormArray {
    return this.surveyForm.get('questions')?.get([this.index])?.get('answers') as FormArray;
  }
}
