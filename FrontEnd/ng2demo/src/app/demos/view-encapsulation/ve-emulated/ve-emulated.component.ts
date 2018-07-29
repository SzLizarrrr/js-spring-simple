import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-emulated',
  templateUrl: './ve-emulated.component.html',
  styleUrls: ['./ve-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VeEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
