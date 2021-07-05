import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailPageComponent } from 'src/app/components/pages/book-detail-page/book-detail-page.component';
import { BooksPageComponent } from 'src/app/components/pages/books-page/books-page.component';

const routes: Routes = [
    { path: ':id', component: BookDetailPageComponent },
    { path: '', component: BooksPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksSectionRoutingModule { }