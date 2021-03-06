import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    SurveysComponent,
    SurveyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports : [
    SurveysComponent,
    SurveyComponent
  ]
})
export class SurveysModule { }
