import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MealsService } from './services/meals/meals.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class SharedHealthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedHealthModule,
      providers: [MealsService]
    }
  }
}
