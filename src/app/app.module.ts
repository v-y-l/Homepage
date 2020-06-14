import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Panel } from './components/panel/panel';
import { Shortcut } from './components/shortcut/shortcut';
import { Header } from './components/header/header';
import { Directory } from './components/directory/directory';
import { SystemicRacismViz } from './components/viz/systemic_racism/systemic_racism';

import { Desktop } from './pages/desktop/desktop';
import { Folder } from './pages/folder/folder';
import { Post } from './pages/post/post';

@NgModule({
    imports: [
	BrowserModule,
	FormsModule,
	FlexLayoutModule,
	AppRoutingModule,
	MatButtonModule,
	MatTableModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
	    dataEncapsulation: false,
	    delay: 300,
	    passThruUnknownUrl: true
	})
    ],
    declarations: [
	AppComponent,
	
	/* Components */
	Header,
	Panel,
	Shortcut,
	Directory,

	/* Viz */
	SystemicRacismViz,

	/* Pages */
	Desktop,
	Folder,
	Post,
    ],
    //providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
