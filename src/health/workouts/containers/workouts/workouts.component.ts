import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workouts',
  styleUrls: ['workouts.component.scss'],
  templateUrl: './workouts.component.html'
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;
  subscription: Subscription;

  constructor(
    private workoutService: WorkoutsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutService.workouts$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeWorkout(event: Workout) {
    this.workoutService.removeWorkout(event.$key);
  }
}
