import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from 'src/app/components/pages/admin-page/admin-page.component';
import { EditArticlePageComponent } from 'src/app/components/pages/edit-article-page/edit-article-page.component';
import { EditBookPageComponent } from 'src/app/components/pages/edit-book-page/edit-book-page.component';
import { NewArticlePageComponent } from 'src/app/components/pages/new-article-page/new-article-page.component';
import { NewBookPageComponent } from 'src/app/components/pages/new-book-page/new-book-page.component';

const routes: Routes = [
    { path: 'new-book', component: NewBookPageComponent },
    { path: 'new-article', component: NewArticlePageComponent },
    { path: 'edit-book', component: EditBookPageComponent },
    { path: 'edit-article', component: EditArticlePageComponent },
    { path: '', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSectionRoutingModule { }