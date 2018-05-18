import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './containers/meals/meals.component';
import { SharedHealthModule } from '../shared/shared.module';
import { MealComponent } from './containers/meal/meal.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import { ListItemComponent } from '../shared/components/list-item/list-item.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
  { path: ':id', component: MealComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedHealthModule
  ],
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ]
})
export class MealsModule {}
