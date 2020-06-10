import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'article',
    templateUrl: './article.ng.html',
    styleUrls: ['./article.css']
})
export class Article {
    constructor(
	private router: Router,
    ) {
    }
}
