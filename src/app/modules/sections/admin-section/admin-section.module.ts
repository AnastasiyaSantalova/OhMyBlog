import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminSectionRoutingModule } from './admin-section-routing.module';
import { MatDesignModule } from '../../mat-design/mat-design.module';

import { AdminPageComponent } from '../../../components/pages/admin-page/admin-page.component';
import { NewArticlePageComponent } from 'src/app/components/pages/new-article-page/new-article-page.component';
import { NewBookPageComponent } from 'src/app/components/pages/new-book-page/new-book-page.component';
import { EditBookPageComponent } from '../../../components/pages/edit-book-page/edit-book-page.component';
import { EditArticlePageComponent } from '../../../components/pages/edit-article-page/edit-article-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    NewArticlePageComponent,
    NewBookPageComponent,
    EditBookPageComponent,
    EditArticlePageComponent
  ],
  imports: [
    CommonModule,
    AdminSectionRoutingModule,
    RouterModule,
    MatDesignModule,
    FormsModule
  ]
})
export class AdminSectionModule { }
