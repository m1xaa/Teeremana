import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsPageComponent } from './components/pages/trainings-page/trainings-page.component';

const routes: Routes = [
  { path: 'training', component: TrainingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
