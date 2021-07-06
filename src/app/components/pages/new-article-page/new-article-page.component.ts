import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-article-page',
  templateUrl: './new-article-page.component.html',
  styleUrls: ['./new-article-page.component.scss'],
  providers: [DatePipe]
})
export class NewArticlePageComponent implements OnInit {
  title: string = '';
  content: string = '';
  publicationDate: string = '';

  constructor(
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.publicationDate = String(this.datePipe.transform(new Date(), 'MM/dd/yyyy'));
  }

  onSubmit(): void {
    alert('Creating a new article...');
    this.router.navigateByUrl('/admin');
  }

}
