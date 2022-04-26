import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveysComponent} from "./components/surveys/surveys.component";
import {SurveyFormStepperComponent} from './components/form/survey-form-stepper/survey-form-stepper.component';

const routes: Routes = [
  // {path: ':id', component: SurveyComponent},
  {path: 'create', component: SurveyFormStepperComponent},
  {path: '', component: SurveysComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {
}
