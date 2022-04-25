import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {SurveysRoutingModule} from "./surveys-routing.module";
import {SurveyFormComponent} from './components/form/survey-form/survey-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { SurveyFormStepperComponent } from './components/form/survey-form-stepper/survey-form-stepper.component';
import { SurveyFormStepSurveyComponent } from './components/form/survey-form-step-survey/survey-form-step-survey.component';
import { SurveyFormStepQuestionsComponent } from './components/form/survey-form-step-questions/survey-form-step-questions.component';


@NgModule({
  declarations: [
    SurveysComponent,
    SurveyComponent,
    SurveyFormComponent,
    SurveyFormStepperComponent,
    SurveyFormStepSurveyComponent,
    SurveyFormStepQuestionsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    SurveysRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
  ]
})
export class SurveysModule {
}
