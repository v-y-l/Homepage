import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'folder',
    templateUrl: './folder.ng.html',
})
export class Folder {

    constructor(
	private router: Router,
    ) {
    }
}
