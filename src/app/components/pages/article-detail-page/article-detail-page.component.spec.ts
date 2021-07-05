import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailPageComponent } from './article-detail-page.component';

describe('ArticlePageComponent', () => {
  let component: ArticleDetailPageComponent;
  let fixture: ComponentFixture<ArticleDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
