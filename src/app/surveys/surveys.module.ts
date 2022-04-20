import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {SurveysRoutingModule} from "./surveys-routing.module";



@NgModule({
  declarations: [
    SurveysComponent,
    SurveyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    SurveysRoutingModule,
  ],
  exports : [
    SurveysComponent,
    SurveyComponent
  ]
})
export class SurveysModule { }
