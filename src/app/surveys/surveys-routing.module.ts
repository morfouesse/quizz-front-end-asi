import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyFormComponent} from "./components/form/survey-form/survey-form.component";

const routes: Routes = [
  // {path: ':id', component: SurveyComponent},
  {path: 'create', component: SurveyFormComponent},
  {path: '', component: SurveysComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {
}
