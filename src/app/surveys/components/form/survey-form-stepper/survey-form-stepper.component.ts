import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomsValidatorsService} from "../../../../shared/services/customs-validators.service";

@Component({
  selector: 'app-survey-form-stepper',
  templateUrl: './survey-form-stepper.component.html',
  styleUrls: ['./survey-form-stepper.component.less'],
})
export class SurveyFormStepperComponent implements OnInit {

  public surveyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private customValidatorsService: CustomsValidatorsService) {
  }

  ngOnInit(): void {
    this.surveyForm = this.createSurveyForm();
    console.log(this.surveyForm)
  }


  createSurveyForm(): FormGroup {

    return this.surveyForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        this.customValidatorsService.noSpaceValidation.bind(this),
       // this.customValidatorsService.getErrorMessage(),
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(5),
        this.customValidatorsService.noSpaceValidation.bind(this),
      ]],
      questions: this.formBuilder.array([
       ])
    })
  }


}
