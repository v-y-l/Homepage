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

    goToResume() {
	window.open('https://drive.google.com/file/d/1GOkKzzs57FJ3fCZod4F-50rDRfbeO-T4/view?usp=sharing');
    }
}
