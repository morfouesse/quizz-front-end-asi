import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component";

const routes: Routes = [
  {path: 'surveys', loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule)},
  {path: '', component: HomeComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
