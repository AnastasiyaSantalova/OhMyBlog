import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';



@NgModule({
  declarations: [
    ArticleComponent,
    RecomendationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
