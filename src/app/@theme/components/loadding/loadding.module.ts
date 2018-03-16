import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotComponent } from './dot/dot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DotComponent],
  exports:[DotComponent]
})
export class LoaddingModule { }
