import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { FileType } from '../../interfaces/file';

@Component({
    selector: 'desktop',
    templateUrl: './desktop.ng.html',
    styleUrls: ['./desktop.css']
})
export class Desktop {
    FileType = FileType;

    constructor(
	private router: Router,
    ) {
    }
}
