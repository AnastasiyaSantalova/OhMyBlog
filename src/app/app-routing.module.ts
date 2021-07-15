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
    path: 'admin',
    loadChildren: () => import('./modules/sections/admin-section/admin-section.module').then(m => m.AdminSectionModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/sections/home-section/home-section.module').then(m => m.HomeSectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
