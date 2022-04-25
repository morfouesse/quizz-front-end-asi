import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {SurveyHttpClientService} from "../../../services/survey-http-client.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-survey-form-stepper',
  templateUrl: './survey-form-stepper.component.html',
  styleUrls: ['./survey-form-stepper.component.less']
})
export class SurveyFormStepperComponent implements OnInit {

  surveyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private surveyHttpClientService: SurveyHttpClientService, private router: Router) {
  }

  ngOnInit(): void {
    this.surveyForm = this.createSurveyForm();
    console.log(this.surveyForm)
  }


  createSurveyForm(): FormGroup {

    return this.surveyForm = this.formBuilder.group({
      title: [null, [
        Validators.required,
        Validators.minLength(5),
        // this.unAuthrorizedNameValidator(this.nameRe)
      ]],
      description: [null, [
        Validators.required,
        Validators.minLength(5),
      ]],
      questions: this.formBuilder.array([
        this.formBuilder.group({
          title: [null, [
            Validators.required,
            Validators.minLength(5),
          ]],
          answers: this.formBuilder.array([
            this.formBuilder.group({
              name: [null, [
                Validators.required,
                Validators.minLength(5),
              ]],
              goodAnswer: [false, [
              ]],
              question: [null,[

              ]]
            })
          ])
        })
      ])
    })
  }

  get questions(): FormArray {
    return this.formSurvey?.get('questions') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(this.formBuilder.control(''));
  }

  get answers(): FormArray {
    return this.formSurvey?.get('questions')?.get([0])?.get('answers') as FormArray;
    //return this.formArray?.get([1])?.get('questions') as FormArray;
  }

  addAnswer(): void {
    this.answers.push(this.formBuilder.control(''));
  }


  get formSurvey(): AbstractControl | null {
    return this.surveyForm;
  }

  unAuthrorizedNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = nameRe.test(control.value);
      return name ? {unAuthorizedName: {value: control.value}} : null;
    }
  }

  onSubmitForm() {
    this.surveyHttpClientService.addSurveyWithTheseQuestionsAndAnswers(this.surveyForm).pipe(
      tap(() => this.router.navigateByUrl('/surveys'))
    ).subscribe();
  }
/*
  inputChangeOnStepper(data: string) {
    if (data == null || data == '') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }*/


  isEnableQuestion() {
    // console.log(this.surveyForm);
    if (this.formSurvey?.get('questions')?.get([0])?.get('title')?.valid) {
      return false;
    } else {
      return true;
    }
  }
  isEnableAnswer(){
    if(this.formSurvey?.get('questions')?.get([0])?.get('answers')?.get([0])?.get('name')?.valid){
      return false;
    } else {
      return true;
    }
  }
/*
  inputQuestionTitle() {
    console.log(this.questionTitleInput);
    let id = 1;
    let currentQuestion = {
      id: id,
      title: this.questionTitleInput!,
    }
    id++;
    this.inputQuestions.push(currentQuestion);
  }*/
}
