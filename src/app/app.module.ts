import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
    apiKey: "AIzaSyA0ZOOmUZC_O5MP7MMwo_NtH-QoNC5ak7o",
    authDomain: "fitness-app-11175.firebaseapp.com",
    databaseURL: "https://fitness-app-11175.firebaseio.com",
    projectId: "fitness-app-11175",
    storageBucket: "fitness-app-11175.appspot.com",
    messagingSenderId: "414306288153"
  };
*/
