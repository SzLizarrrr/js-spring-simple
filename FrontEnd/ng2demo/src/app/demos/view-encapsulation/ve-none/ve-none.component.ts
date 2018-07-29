import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-none',
  templateUrl: './ve-none.component.html',
  styleUrls: ['./ve-none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VeNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
