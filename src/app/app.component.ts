import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Just a Timer</h1>
    <p>Select a min and max time and get a random timer within that range!</p>
    <app-timer></app-timer>
  </div>
  `,
  styles: [
    `  
    div {
      display: flex;
      flex-direction: column;
    }

    h1, p {
      text-align: center;
    }

    p {
      font-size: 1em;
    }
    `
  ]
})
export class AppComponent {
  title = 'random-timer';
}
