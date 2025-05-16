import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import {animalReducer} from './+state/animal-reducers';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ animal: animalReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
