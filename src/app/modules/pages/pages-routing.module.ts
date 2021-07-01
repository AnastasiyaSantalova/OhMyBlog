import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'books', component: BooksComponent },
    { path: 'books/:id', component: BookPageComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:id', component: ArticlePageComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }