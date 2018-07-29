import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-observable',
  templateUrl: './form-observable.component.html',
  styleUrls: ['./form-observable.component.scss']
})
export class FormObservableComponent implements OnInit {

  counterFC: FormControl = new FormControl();
  counter: number;
  counterSub;

  constructor() {
    this.counterSub = this.counterFC.valueChanges
      .subscribe(value => this.counter = value);
  }

  ngOnInit() {
  }

  counterUnsubscribe() {
    this.counterSub.unsubscribe();
  }

}
