import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from 'app/pages/pages.routing';
import { HomeComponent } from 'app/pages/home/home.component';
import { BannerModule } from 'app/@theme/components/banner/banner.module';
import { LayoutModule } from './layout/layout.module';
import { LoaddingModule } from '../@theme/components/loadding/loadding.module';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { WelfareComponent } from './welfare/welfare.component';
import { VersionsComponent } from './versions/versions.component';
import { BooksComponent } from './books/books.component';
import { LifeComponent } from './life/life.component';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    LayoutModule,
    LoaddingModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [PagesComponent, HomeComponent, BlogComponent, CommentComponent, IntroduceComponent, WelfareComponent, VersionsComponent, BooksComponent, LifeComponent]
})
export class PagesModule { }
