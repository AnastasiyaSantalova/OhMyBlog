import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/types/article';
import { fakeArticles } from '../../../fake-data/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor() { }

  ngOnInit(): void {
    this.articles = fakeArticles;
  }

}
