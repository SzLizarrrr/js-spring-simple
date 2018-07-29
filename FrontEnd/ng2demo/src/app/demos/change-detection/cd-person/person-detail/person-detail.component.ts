import { Component, OnInit, Input, ChangeDetectionStrategy,  OnChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { ImPerson } from '../../../shared/models/im-person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  @Input()
  person: ImPerson;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in person-detail');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in person-detail');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in person-detail');
  }

}
