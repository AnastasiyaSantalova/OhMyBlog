import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookPageComponent } from './new-book-page.component';

describe('NewBookPageComponent', () => {
  let component: NewBookPageComponent;
  let fixture: ComponentFixture<NewBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
