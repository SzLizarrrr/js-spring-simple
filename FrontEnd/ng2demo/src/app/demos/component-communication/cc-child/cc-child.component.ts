import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.scss']
})
export class CcChildComponent implements OnInit, OnChanges {

  @Input('person')
  childPerson;

  @Output()
  onAddAge = new EventEmitter<number>();

  childAge: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.childAge = this.childPerson.age;
  }

  addAge() {
    // this.childPerson.age++;
    this.childAge++;
    this.onAddAge.emit(this.childAge);
  }

}
