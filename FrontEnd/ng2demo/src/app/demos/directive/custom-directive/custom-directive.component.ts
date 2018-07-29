import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {

  person;

  constructor() { }

  ngOnInit() {
  }

  togglePerson() {
    this.person = this.person ? null : {name: 'Bob'};
  }
}
