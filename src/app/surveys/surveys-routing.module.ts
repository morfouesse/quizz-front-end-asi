import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyComponent} from "./components/survey/survey.component";

const routes: Routes = [
  {path: "", component: SurveysComponent},
  {path: ":id", component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {
}
