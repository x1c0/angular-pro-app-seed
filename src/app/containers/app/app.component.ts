import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      Hello Ultimate Angular!
    </div>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
