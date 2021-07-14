import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';

import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ArticleData } from 'src/app/types/articleData';

@Component({
  selector: 'app-edit-article-page',
  templateUrl: './edit-article-page.component.html',
  styleUrls: ['./edit-article-page.component.scss'],
  providers: [DatePipe]
})
export class EditArticlePageComponent implements OnInit {
  idSubscription: Subscription;
  articleSubscription: Subscription;

  id: string = '';
  url: string = '';
  title: string = '';
  content: string = '';
  publicationDate: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private articleService: ArticlesService,
  ) { }

  ngOnInit(): void {
    this.recieveArticleData();

    // get automated data
    this.url = String(this.route.snapshot.paramMap.get('id'));
    this.publicationDate = String(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
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
    const updatedArticle: ArticleData = {
      url: this.url,
      title: this.title,
      content: this.content,
      publicationDate: this.publicationDate
    }
    alert('Saving changes for the article...');
    this.articleService.updateArticle(this.id, updatedArticle).subscribe(() => {
      if (this.url) {
        this.router.navigateByUrl(`/articles/${this.url}`);
      } else {
        this.router.navigateByUrl(`/articles`);
      }
    })
  }

  recieveArticleData(): void {
    this.idSubscription = this.articleService.recieveArticleID().subscribe(id => {
      this.articleSubscription = this.articleService.getArticle(id).subscribe(article => {
        this.id = article.id;
        this.url = article.url;
        this.title = article.title;
        this.content = article.content;
      })
    })
  }
}
