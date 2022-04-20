import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyComponent} from "./components/survey/survey.component";

const routes: Routes = [
 // {path: ':id', component: SurveyComponent},
  {path: '', component: SurveysComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {
}
