import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {

  person: Person = {
    name: 'Bob',
    age: 20
  };

  constructor() { }

  ngOnInit() {
  }

  changePerson() {
    this.person = new Person('Alice', 22);
  }

  changePersonName() {
    this.person.name = 'Alex';
  }
}
