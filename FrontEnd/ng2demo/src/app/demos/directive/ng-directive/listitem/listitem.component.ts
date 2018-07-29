import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  @Input()
  person;

  @Input()
  index;

  constructor() { }

  ngOnInit() {
  }

}
