import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { AuxComponent } from 'app/aux/aux.component';
import { LostComponent } from 'app/aux/lost/lost.component';

export const AuxRoutes: Routes = [

    {
        path: '',
        component:AuxComponent,
        children: [{
            path: 'login',
            component: LoginComponent
        },{
            path: 'lock',
            component: LockComponent
        },{
            path: 'register',
            component: RegisterComponent
        },{
            path:'lost',
            component:LostComponent
        }]
    }
];
