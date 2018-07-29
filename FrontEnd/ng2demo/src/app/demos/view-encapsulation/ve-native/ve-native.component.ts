import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-native',
  templateUrl: './ve-native.component.html',
  styleUrls: ['./ve-native.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class VeNativeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
