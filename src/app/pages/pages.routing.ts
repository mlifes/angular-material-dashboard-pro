import { Routes } from "@angular/router";
import { PagesComponent } from "app/pages/pages.component";
import { HomeComponent } from "app/pages/home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { CommentComponent } from "./comment/comment.component";
import { IntroduceComponent } from "./introduce/introduce.component";
import { WelfareComponent } from "./welfare/welfare.component";
import { VersionsComponent } from "./versions/versions.component";
import { BooksComponent } from "./books/books.component";
import { LifeComponent } from "./life/life.component";

export const PagesRoutes : Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'blog',
                component:BlogComponent
            },
            {
                path:'life',
                component:LifeComponent
            },
            {
                path:'books',
                component:BooksComponent
            },
            {
                path:'comment',
                component:CommentComponent
            },
            {
                path:'introduce',
                component:IntroduceComponent
            },
            {
                path:'welfare',
                component:WelfareComponent
            },
            {
                path:'versions',
                component:VersionsComponent
            }
        ]
    }
]