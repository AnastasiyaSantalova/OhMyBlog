import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { BooksComponent } from './books/books.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { BookPageComponent } from './book-page/book-page.component';
import { MatDesignModule } from '../mat-design/mat-design.module';

@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent,
    ArticlePageComponent,
    ArticlesComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatDesignModule
  ]
})
export class PagesModule { }
