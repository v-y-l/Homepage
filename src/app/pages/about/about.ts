import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'about',
    templateUrl: './about.ng.html',
})
export class About {

    constructor(
	private router: Router,
    ) {
    }
}
