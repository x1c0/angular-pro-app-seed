import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
  }
];

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyA0ZOOmUZC_O5MP7MMwo_NtH-QoNC5ak7o',
  authDomain: 'fitness-app-11175.firebaseapp.com',
  databaseURL: 'https://fitness-app-11175.firebaseio.com',
  projectId: 'fitness-app-11175',
  storageBucket: 'fitness-app-11175.appspot.com',
  messagingSenderId: '414306288153'
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [],
  exports: []
})
export class AuthModule {}
