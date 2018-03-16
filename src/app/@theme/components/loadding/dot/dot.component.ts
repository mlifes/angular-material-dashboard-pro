import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: `<div class="loadding">
              <div class="dot">
                <div></div>
              </div>
              <div class="dot">
                <div></div>
              </div>
              <div class="dot">
                <div></div>
              </div>
              <div class="dot">
                <div></div>
              </div>
            </div>`,
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
