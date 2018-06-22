import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Workout } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['workout-form.component.scss'],
  templateUrl: './workout-form.component.html'
})
export class WorkoutFormComponent implements OnChanges {

  @Input() workout: Workout;

  @Output() create = new EventEmitter<Workout>();
  @Output() update = new EventEmitter<Workout>();
  @Output() remove = new EventEmitter<Workout>();

  toggled: boolean = false;
  exists: boolean = false;

  form = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get required() {
    const nameInput = this.form.get('name');
    return nameInput.hasError('required') && nameInput.touched;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''))
  }

  createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateWorkout() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeWorkout() {
    this.remove.emit(this.form.value);
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  toggle() {
    this.toggled = !this.toggled
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*if (this.workout && this.workout.name) {
      this.exists = true;
      this.emptyIngredients();

      const value = this.workout;
      this.form.patchValue(value);
      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }*/
  }

  private emptyIngredients() {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }
}
