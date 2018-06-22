import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap'
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout',
  styleUrls: ['workout.component.scss'],
  templateUrl: './workout.component.html'
})
export class WorkoutComponent implements OnInit, OnDestroy {

  workout$: Observable<Workout>;
  subcription: Subscription;

  constructor(
    private workoutsService: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async addWorkout(event: Workout) {
    console.log('Meal: ', event);
    await this.workoutsService.addWorkout(event);
    this.backToWorkouts();
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workoutsService.updateWorkout(key, event);
    this.backToWorkouts();
  }

  async removeWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workoutsService.removeWorkout(key);
    this.backToWorkouts();
  }

  private backToWorkouts() {
    this.router.navigate(['workouts']);
  }

  ngOnInit(): void {
    this.subcription = this.workoutsService.workouts$.subscribe();
    this.workout$ = this.route.params
      .switchMap(param => this.workoutsService.getWorkout(param.id));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
