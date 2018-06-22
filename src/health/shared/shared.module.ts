import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MealsService } from './services/meals/meals.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import { WorkoutsService } from './services/workouts/workouts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  exports: [
    ListItemComponent
  ],
  declarations: [
    ListItemComponent
  ],
  providers: [],
})
export class SharedHealthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedHealthModule,
      providers: [
        MealsService,
        WorkoutsService
      ]
    }
  }
}
