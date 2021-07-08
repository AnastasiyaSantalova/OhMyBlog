import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';

import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-edit-article-page',
  templateUrl: './edit-article-page.component.html',
  styleUrls: ['./edit-article-page.component.scss'],
  providers: [DatePipe]
})
export class EditArticlePageComponent implements OnInit {
  idSubscription: Subscription;
  articleSubscription: Subscription;

  url: string = '';
  title: string = '';
  content: string = '';
  publicationDate: string = '';

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.recieveArticleData();
    this.publicationDate = String(this.datePipe.transform(new Date(), 'MM/dd/yyyy'));
  }

  ngOnDestroy(): void {
    if(this.idSubscription) {
      this.idSubscription.unsubscribe();
    }
    if (this.articleSubscription) {
      this.articleSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    alert('Saving changes for the article...');
    if (this.url) {
      this.router.navigateByUrl(`/articles/${this.url}`);
    } else {
      this.router.navigateByUrl(`/articles`);
    }
  }

  recieveArticleData(): void {
    this.idSubscription = this.articleService.recieveArticleID().subscribe(id => {
      this.articleSubscription = this.articleService.getArticleByID(id).subscribe(article => {
        this.url = article.url;
        this.title = article.title;
        this.content = article.content;
      })
    })
  }


}
