import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <header></header>
    <div class="outlet-container">
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Victor\'s Homepage';
}

