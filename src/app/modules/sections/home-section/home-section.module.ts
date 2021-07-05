import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSectionRoutingModule } from './home-section-routing.module';

import { HomePageComponent } from 'src/app/components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeSectionRoutingModule
  ]
})
export class HomeSectionModule { }
