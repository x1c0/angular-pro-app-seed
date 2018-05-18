import { Component } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  templateUrl: './meal.component.html'
})
export class MealComponent {

  constructor(
    private mealsService: MealsService,
    private router: Router
  ) {}

  async addMeal(event: Meal) {
    console.log('Meal: ', event);
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  private backToMeals() {
    this.router.navigate(['meals']);
  }
}
