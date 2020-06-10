import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FileType } from '../../interfaces/file';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.ng.html',
  styleUrls: ['./shortcut.css']
})
export class Shortcut {
    /** The name of file that the shortcut takes you to. */
    @Input() name: string;
    /** The uniquely identifiable id of the file. */
    @Input() id: number;
    /** The file type of the destination file. */
    @Input() fileType: FileType;

    FileType = FileType;

    constructor(
	private router: Router,
    ) {}

    goToShortcut() {
	const link = [this.fileType, this.id];
	this.router.navigate(link);
    }
}
