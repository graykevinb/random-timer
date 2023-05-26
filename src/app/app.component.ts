import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>

  <footer>
    <app-footer></app-footer>
  </footer>
  `,
  styles: [
    `  
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    `
  ]
})
export class AppComponent {
  title = 'random-timer';
}
