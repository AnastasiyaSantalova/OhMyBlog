import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: () => import('./modules/sections/articles-section/articles-section.module').then(m => m.ArticlesSectionModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/sections/books-section/books-section.module').then(m => m.BooksSectionModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/sections/home-section/home-section.module').then(m => m.HomeSectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
