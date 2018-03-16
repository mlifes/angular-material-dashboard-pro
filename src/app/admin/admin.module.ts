import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from 'app/admin/admin.routing';
import { SidebarModule } from 'app/admin/sidebar/sidebar.module';
import { MdModule } from 'app/@theme/components/md/md.module';
import { ComponentsModule } from 'app/@theme/components/components/components.module';
import { DashboardComponent } from 'app/@theme/components/dashboard/dashboard.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { FooterModule } from './layout/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SidebarModule,
    MdModule,
    ComponentsModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [AdminComponent,DashboardComponent]
})
export class AdminModule { }
