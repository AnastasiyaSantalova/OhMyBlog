import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailPageComponent } from 'src/app/components/pages/article-detail-page/article-detail-page.component';
import { ArticlesPageComponent } from 'src/app/components/pages/articles-page/articles-page.component';

const routes: Routes = [
    { path: ':id', component: ArticleDetailPageComponent },
    { path: '', component: ArticlesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesSectionRoutingModule { }