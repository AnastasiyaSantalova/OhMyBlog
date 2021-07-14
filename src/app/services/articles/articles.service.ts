import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

import { Article } from 'src/app/types/article';
import { ArticleData } from 'src/app/types/articleData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private savedArticleID = new ReplaySubject<string>();
  private articlesURL = '/api/articles';

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesURL);
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.articlesURL}/${id}`);
  }

  createArticle(newArticle: ArticleData): Observable<any> {
    return this.http.post(this.articlesURL, newArticle, httpOptions)
  }

  updateArticle(id: string, updatedArticle: ArticleData): Observable<any> {
    return this.http.put(`${this.articlesURL}/${id}`, updatedArticle, httpOptions)
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.articlesURL}/${id}`, httpOptions)
  }

  sendArticleID(id: string): void {
    this.savedArticleID.next(id);
  }

  recieveArticleID(): Observable<string> {
    return this.savedArticleID.asObservable();
  }
}
