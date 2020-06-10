import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.ng.html',
  styleUrls: ['./panel.css']
})
export class Panel {

    constructor(
	private router: Router,
    ) {}

    goToHomepage() {
	this.router.navigate(['']);
    }

}
