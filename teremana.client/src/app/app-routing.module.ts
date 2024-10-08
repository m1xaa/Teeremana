import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsPageComponent } from './components/pages/trainings-page/trainings-page.component';
import { ProgressPageComponent } from './components/pages/progress-page/progress-page.component';
import { InitialPageComponent } from './components/pages/initial-page/initial-page.component';

const routes: Routes = [
  {path: "", component: InitialPageComponent},
  { path: 'training', component: TrainingsPageComponent},
  { path: 'progress', component: ProgressPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
