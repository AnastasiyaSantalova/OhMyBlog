import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/types/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
