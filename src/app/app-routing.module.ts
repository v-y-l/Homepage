import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desktop } from './pages/desktop/desktop';
import { Folder } from './pages/folder/folder';
import { Post } from './pages/post/post';

const routes: Routes = [
    { path: '', component: Desktop },
    { path: 'folder/:id', component: Folder },
    { path: 'post/:id', component: Post },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
