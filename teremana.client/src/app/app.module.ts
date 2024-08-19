import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationModalComponent } from './components/pages/home-page/auth/registration-modal/registration-modal.component';
import { LoginModalComponent } from './components/pages/home-page/auth/login-modal/login-modal.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CommonModule, NgForOf } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TrainingEffects } from './state/trainings/training.effects';
import { trainingReducer } from './state/trainings/training.reducers';
import { TrainingsPageComponent } from './components/pages/trainings-page/trainings-page.component';
import { TrainingsTableComponent } from './components/pages/trainings-page/ui/trainings-table/trainings-table.component';
import { CreateTrainingModalComponent } from './components/pages/trainings-page/ui/create-training-modal/create-training-modal.component';
import { UpdateTrainingModalComponent } from './components/pages/trainings-page/ui/update-training-modal/update-training-modal.component';
import { DeleteTrainingModalComponent } from './components/pages/trainings-page/ui/delete-training-modal/delete-training-modal.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProgressTableComponent } from './progress-table/progress-table.component';
import { ProgressPageComponent } from './components/pages/progress-page/progress-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    HeaderComponent,
    FooterComponent,
    TrainingsPageComponent,
    TrainingsTableComponent,
    CreateTrainingModalComponent,
    UpdateTrainingModalComponent,
    DeleteTrainingModalComponent,
    ProgressPageComponent,
    ProgressTableComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, 
    StoreModule.forRoot({ trainings: trainingReducer}),
    EffectsModule.forRoot([TrainingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule,
    CommonModule,
    NgForOf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
