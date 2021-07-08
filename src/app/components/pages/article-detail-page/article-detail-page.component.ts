import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Article } from 'src/app/types/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss']
})
export class ArticleDetailPageComponent implements OnInit {
  article: Article;
  articlesSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    const url = String(this.route.snapshot.paramMap.get('id'));
    this.articlesSubscription = this.articleService.getArticleByURL(url).subscribe(article => {
      this.article = article;
    });
  }

  ngOnDestroy() {
    if(this.articlesSubscription) {
      this.articlesSubscription.unsubscribe();
    }
  }

  sendArticleID(): void {
    this.articleService.sendArticleID(this.article.id);
  }
}
