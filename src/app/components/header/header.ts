import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.ng.html',
  styleUrls: ['./header.css']
})
export class Header {
    goToTwitter() {
	window.open('https://twitter.com/vlinvlin6');
    }

    goToLinkedIn() {
	window.open('https://www.linkedin.com/in/vyl/');
    }
}
