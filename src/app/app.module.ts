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
import { sessionReducer } from './shared/reducers/session.reducer';

// services
import { SessionService } from './shared/services/session.service';

// root component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.provideStore({
      session: sessionReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
