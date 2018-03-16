import { Directive, Input, HostBinding, HostListener, Attribute } from '@angular/core';

@Directive({
  selector: '[greet]'
})
export class GreetDirective {
  @Input() greet: string;

  @HostBinding() get innerText() {
      return this.greet;
  }

  @HostListener('click',['$event']) 
  onClick(event) {
      this.greet = 'Clicked!';
      console.dir(event);
  }

  constructor(@Attribute('author') public author: string) {
      console.log(author);
  }
}
