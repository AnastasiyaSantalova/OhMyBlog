import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/types/article';
import { fakeArticles } from '../../../fake-data/articles';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  constructor() { }

  ngOnInit(): void {
    this.articles = fakeArticles;
  }

}
