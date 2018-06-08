import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {

  meals$: Observable<Meal[]> = this.db
    .list(`meals/${this.userId}`)
    .do(next => this.store.set('meals', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  get userId() {
    return this.authService.currentUser.uid;
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.userId}`).push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.userId}`).remove(key);
  }

  getMeal(key: string) {
    if (!key) {
      return Observable.of({});
    }
    return this.store.select<Meal[]>('meals')
      .filter(Boolean)
      .map(meals => meals.find((meal: Meal) => meal.$key === key));
  }
}
