import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ArticleData } from 'src/app/types/articleData';

@Component({
  selector: 'app-new-article-page',
  templateUrl: './new-article-page.component.html',
  styleUrls: ['./new-article-page.component.scss'],
  providers: [DatePipe]
})

export class NewArticlePageComponent implements OnInit {
  url: string = ''
  title: string = '';
  content: string = '';
  publicationDate: string = '';

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.publicationDate = String(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
  }

  onSubmit(): void {
    const newArticle: ArticleData = {
      title: this.title,
      url: this.url,
      content: this.content,
      publicationDate: this.publicationDate
    }
    this.articleService.createArticle(newArticle).subscribe(() => {
      this.router.navigateByUrl('/admin');
      alert('article created!');
    });
  }

}
