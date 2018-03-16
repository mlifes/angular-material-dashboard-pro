import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { AuxComponent } from './aux.component';
import { AuxRoutes } from 'app/aux/aux.routing';
import { LostComponent } from './lost/lost.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuxRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LockComponent,
    AuxComponent,
    AuxComponent,
    LostComponent
  ]
})

export class AuxModule {}
