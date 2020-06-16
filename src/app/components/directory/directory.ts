import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FileType, File } from '../../interfaces/file';

const FILES: File[] = [
    {
	name: 'Systemic racism',
	description: 'A visualization of the system through landmark events.',
	type: FileType.Post,
	id: 1
    },
    // {
    // 	name: 'State budget breakdown',
    // 	description: 'Where is our tax money is going?',
    // 	type: FileType.Post,
    // 	id: 2
    // },
];

@Component({
  selector: 'directory',
  templateUrl: './directory.ng.html',
  styleUrls: ['./directory.css']
})
export class Directory {
    /* Order of the columns. */
    displayedColumns: string[] = ['name', 'description'];
    dataSource = FILES;

    constructor(
	private router: Router,
    ) {}

    goToFile(file: File) {
	this.router.navigate([file.type, file.id]);
    }
}
