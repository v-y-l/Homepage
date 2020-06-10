import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desktop } from './pages/desktop/desktop';
import { Folder } from './pages/folder/folder';
import { Article } from './pages/article/article';

const routes: Routes = [
    { path: '', component: Desktop },
    { path: 'folder/:id', component: Folder },
    { path: 'article/:id', component: Article },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
