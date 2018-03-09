import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from '../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;

  constructor(private store: Store,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
