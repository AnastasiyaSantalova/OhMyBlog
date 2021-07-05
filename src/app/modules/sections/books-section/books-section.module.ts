import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksSectionRoutingModule } from './books-section-routing.module';

import { BookDetailPageComponent } from 'src/app/components/pages/book-detail-page/book-detail-page.component';
import { BooksPageComponent } from 'src/app/components/pages/books-page/books-page.component';

@NgModule({
  declarations: [
    BookDetailPageComponent,
    BooksPageComponent
  ],
  imports: [
    CommonModule,
    BooksSectionRoutingModule
  ]
})
export class BooksSectionModule { }
