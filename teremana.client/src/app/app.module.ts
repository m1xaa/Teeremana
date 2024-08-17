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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    CommonModule,
    NgForOf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
