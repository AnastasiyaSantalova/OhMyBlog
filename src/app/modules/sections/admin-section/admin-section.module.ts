import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from '../../../components/pages/admin-page/admin-page.component';
import { AdminSectionRoutingModule } from './admin-section-routing.module';
import { NewArticlePageComponent } from 'src/app/components/pages/new-article-page/new-article-page.component';
import { NewBookPageComponent } from 'src/app/components/pages/new-book-page/new-book-page.component';
import { RouterModule } from '@angular/router';
import { MatDesignModule } from '../../mat-design/mat-design.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminPageComponent,
    NewArticlePageComponent,
    NewBookPageComponent
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
