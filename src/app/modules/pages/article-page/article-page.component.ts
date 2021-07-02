import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeArticles } from 'src/app/fake-data/articles';
import { Article } from 'src/app/types/article';
@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  mockArticle: Article = {
    id: '',
    url: '',
    title: 'Something wrong',
    content: 'Please, reload page',
    publicationDate: ''
  }
  article: Article = this.mockArticle;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get('id');
    this.article = fakeArticles.find(a => a.url === url) || this.mockArticle;
  }

}
