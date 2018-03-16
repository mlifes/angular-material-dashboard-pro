import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BillboardComponent } from './billboard/billboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, FooterComponent, BreadcrumbComponent, BillboardComponent],
  exports:[BreadcrumbComponent,NavbarComponent,BillboardComponent]
})
export class LayoutModule { }
