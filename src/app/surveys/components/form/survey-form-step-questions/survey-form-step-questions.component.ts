import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-survey-form-step-questions',
  templateUrl: './survey-form-step-questions.component.html',
  styleUrls: ['./survey-form-step-questions.component.less']
})
export class SurveyFormStepQuestionsComponent implements OnInit {

  @Input() public surveyForm!: FormGroup;
  public index: number = 0;

  public constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
  }


  isNotEnableQuestion() {
    // console.log(this.surveyForm);
    return !this.surveyForm?.get('questions')?.get([0])?.get('title')?.valid;
  }

  get questions(): FormArray {
    return this.surveyForm?.get('questions') as FormArray;
  }



  addQuestion(): void {
    this.questions.push(this.formBuilder.group({
        title: ['', [
          Validators.required,
          Validators.minLength(5),
        ]],
        answers: this.formBuilder.array([
          this.formBuilder.group({
            name: ['', [
              Validators.required,
              Validators.minLength(5),
            ]],
            goodAnswer: [false, [
            ]],
          })
        ])
  }));
  }




}
