import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  templateUrl: './meal.component.html'
})
export class MealComponent implements OnInit, OnDestroy {

  meal$: Observable<Meal>;
  subcription: Subscription;

  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async addMeal(event: Meal) {
    console.log('Meal: ', event);
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  async updateMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.updateMeal(key, event);
    this.backToMeals();
  }

  async removeMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.removeMeal(key);
    this.backToMeals();
  }

  private backToMeals() {
    this.router.navigate(['meals']);
  }

  ngOnInit(): void {
    this.subcription = this.mealsService.meals$.subscribe();
    this.meal$ = this.route.params
      .switchMap(param => this.mealsService.getMeal(param.id));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
