import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component";
import {SurveysComponent} from "./surveys/components/surveys/surveys.component";

const routes: Routes = [
  //{path: "surveys", loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule)},
  {path: "surveys", component: SurveysComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
