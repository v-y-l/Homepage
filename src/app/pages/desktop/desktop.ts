import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FileType } from '../../interfaces/file';

@Component({
    selector: 'desktop',
    templateUrl: './desktop.ng.html',
})
export class Desktop {
    FileType = FileType;
}
