import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.scss']
})
export class NgDirectiveComponent implements OnInit {

  myColor = 'red';

  myStyle= {
    color: this.myColor
  };

  myClass = 'my-class';

  people = [
    {name: 'bob', age: 28},
    {name: 'alice', age: 21},
    {name: 'alex', age: 22}
  ];

  mySwitch: number;

  constructor() { }

  ngOnInit() {
  }

  switch(s: number) {
    this.mySwitch = s;
  }
}
