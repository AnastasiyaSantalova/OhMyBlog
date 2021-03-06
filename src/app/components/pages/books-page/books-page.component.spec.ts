import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPageComponent } from './books-page.component';

describe('BooksComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
