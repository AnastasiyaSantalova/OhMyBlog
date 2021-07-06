import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticlePageComponent } from './new-article-page.component';

describe('NewArticlePageComponent', () => {
  let component: NewArticlePageComponent;
  let fixture: ComponentFixture<NewArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
