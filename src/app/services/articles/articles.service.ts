import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

import { Article } from 'src/app/types/article';
import { fakeArticles } from '../../fake-data/articles';
import { emptyArticle } from 'src/app/fake-data/emptyArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private subject = new ReplaySubject<string>();

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles = of(fakeArticles)
    return articles;
  }

  getArticleByURL(url: string): Observable<Article> {
    return of(fakeArticles.find(a => a.url === url) || emptyArticle);
  }

  getArticleByID(id: string): Observable<Article> {
    return of(fakeArticles.find(a => a.id === id) || emptyArticle);
  }

  sendArticleID(id: string): void {
    this.subject.next(id);
  }

  recieveArticleID(): Observable<string> {
    return this.subject.asObservable();
  }
}
