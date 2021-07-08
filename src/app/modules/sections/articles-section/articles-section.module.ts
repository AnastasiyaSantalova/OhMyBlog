import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDesignModule } from '../../mat-design/mat-design.module';
import { ArticlesSectionRoutingModule } from './articles-section-routing.module';

import { ArticleDetailPageComponent } from 'src/app/components/pages/article-detail-page/article-detail-page.component';
import { ArticlesPageComponent } from 'src/app/components/pages/articles-page/articles-page.component';

@NgModule({
  declarations: [
    ArticleDetailPageComponent,
    ArticlesPageComponent
  ],
  imports: [
    CommonModule,
    ArticlesSectionRoutingModule,
    MatDesignModule,
    RouterModule
  ]
})
export class ArticlesSectionModule { }
