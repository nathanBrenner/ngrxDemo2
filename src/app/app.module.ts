import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// reducers
import { errorReducer } from './shared/reducers/error.reducer';
import { sessionReducer } from './shared/reducers/session.reducer';

// services
import { HttpWrapperService } from './shared/services/http-wrapper.service';
import { QuestionService } from './shared/services/question.service';
import { SessionService } from './shared/services/session.service';

// routing
import { AppRoutingModule } from './app.routing';

// root component
import { AppComponent } from './app.component';

// container components
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// child components
import { NavbarComponent } from './navbar/navbar.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PageNotFoundComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    StoreModule.provideStore({
      error: errorReducer,
      session: sessionReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    HttpWrapperService,
    QuestionService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
