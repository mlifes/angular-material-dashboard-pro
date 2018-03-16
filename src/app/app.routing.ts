import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path:'',
        loadChildren:'./pages/pages.module#PagesModule',
    },
    {
        path:'admin',
        loadChildren:'./admin/admin.module#AdminModule',
    },
    {
        path:'aux',
        loadChildren:'./aux/aux.module#AuxModule',
    },
    {
        path:'**',
        redirectTo:'aux/lost',
        pathMatch:'full',
    }
];
