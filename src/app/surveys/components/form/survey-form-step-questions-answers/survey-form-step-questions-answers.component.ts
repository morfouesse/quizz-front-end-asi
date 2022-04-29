import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomsValidatorsService} from 'src/app/shared/services/customs-validators.service';

@Component({
  selector: 'app-survey-form-step-questions-answers',
  templateUrl: './survey-form-step-questions-answers.component.html',
  styleUrls: ['./survey-form-step-questions-answers.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyFormStepQuestionsAnswersComponent implements OnInit {

  @Input() public surveyForm!: FormGroup;
  @Input() public questions!: FormArray;
  @Input() public index: number = 0;

  public constructor(private formBuilder: FormBuilder, private customValidatorsService: CustomsValidatorsService) {
  }

  public ngOnInit(): void {
  }

  public addAnswer(): void {
    this.answers.push(this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.minLength(2),
          this.customValidatorsService.noSpaceValidation.bind(this),
        ]],
        goodAnswer: [false, []],
      }
    ));
  }

  get answers(): FormArray {
    return this.surveyForm.get('questions')!.get([this.index])!.get('answers') as FormArray;
  }


  public answersNameTrimValidation(i: number): string {
    let questions = this.surveyForm.controls['questions'] as FormArray;
    let questionFormGroup = questions.at(this.index) as FormGroup;
    let answers = questionFormGroup.controls['answers'] as FormArray;
    let answerFormGroup = answers.at(i) as FormGroup;
    return answerFormGroup.controls['name'].errors?.['trimError']?.value;
  }

}
