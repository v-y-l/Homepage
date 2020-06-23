import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desktop } from './pages/desktop/desktop';
import { Folder } from './pages/folder/folder';
import { Post } from './pages/post/post';
import { About } from './pages/about/about';

const routes: Routes = [
    { path: '', component: Desktop },
    { path: 'folder/:id', component: Folder },
    { path: 'post/:id', component: Post },
    { path: 'about', component: About },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
