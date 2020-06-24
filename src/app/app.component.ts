import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var ol: any;

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
    title = 'Victor\'s homepage';

    constructor(private router: Router) {
	// A hack to make relative paths work for SPAs on GitHub Pages
	// https://medium.com/swlh/how-to-host-your-angular-reactjs-vuejs-spa-on-github-pages-2d9ab102ac7b
	let path = localStorage.getItem('path');
	if(path) {
	    localStorage.removeItem('path');
	    this.router.navigate([path]);
	}
    }
}

