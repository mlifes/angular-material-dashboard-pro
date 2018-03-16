import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleButton ;
  navbarVisible : boolean;

  constructor(private element : ElementRef) {
    this.navbarVisible = false;
  }

  ngOnInit() {

    var navbar : HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }

  navbarToggle(){
    var toggleButton = this.toggleButton;

    if(this.navbarVisible == false){
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        },500);
        this.navbarVisible = true;
    } else {
        this.toggleButton.classList.remove('toggled');
        this.navbarVisible = false;
    }
}

}
