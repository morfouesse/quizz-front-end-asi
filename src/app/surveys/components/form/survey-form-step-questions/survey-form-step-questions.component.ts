import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {SurveyHttpClientService} from "../../../services/survey-http-client.service";
import {Router} from "@angular/router";
import {CustomsValidatorsService} from "../../../../shared/services/customs-validators.service";

@Component({
  selector: 'app-survey-form-step-questions',
  templateUrl: './survey-form-step-questions.component.html',
  styleUrls: ['./survey-form-step-questions.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyFormStepQuestionsComponent implements OnInit, OnDestroy {

  @Input() public surveyForm!: FormGroup;
  private destroySubscription: Subscription = new Subscription();

  public constructor(private formBuilder: FormBuilder,
                     private surveyHttpClientService: SurveyHttpClientService,
                     private router: Router,
                     private customValidatorsService: CustomsValidatorsService) {
  }

  public ngOnInit(): void {

  }


  public isNotEnableSurveyAndQuestionsAndAnswers(): boolean {
    return !(this.surveyForm.valid);
  }

  get questions(): FormArray {
    return this.surveyForm!.get('questions') as FormArray;
  }

  questionsTitleTrimValidation(i: number): string {
    let questions = this.surveyForm!.controls['questions'] as FormArray;
    let questionFormGroup = questions.at(i) as FormGroup;
    return questionFormGroup.controls['title'].errors?.['trimError']?.value;
  }

  public addQuestion(): void {
    this.questions.push(this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        this.customValidatorsService.noSpaceValidation.bind(this),
      ]],
      answers: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', [
            Validators.required,
            Validators.minLength(2),
            this.customValidatorsService.noSpaceValidation.bind(this),
          ]],
          goodAnswer: [false, []],
        })
      ])
    }));
  }

  public onSubmitForm(): Subscription {
    return this.surveyHttpClientService.addSurveyWithTheseQuestionsAndAnswers(this.surveyForm).pipe(
      tap(() => this.router.navigateByUrl('/surveys'))
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroySubscription = this.onSubmitForm();
    this.destroySubscription.unsubscribe();
  }

}
