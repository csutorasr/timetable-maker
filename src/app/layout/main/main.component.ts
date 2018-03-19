import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  leftWidth = 200;

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(a) {
    this.leftWidth = a.rectangle.width;
    if (this.leftWidth < 100) {
      this.leftWidth = 100;
    }
  }

}
