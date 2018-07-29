import { Component, OnInit, Input, ChangeDetectionStrategy,
    OnChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { ImPerson } from '../../shared/models/im-person';

@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdPersonComponent implements OnInit,OnChanges, DoCheck, AfterViewChecked {

  @Input()
  person: ImPerson;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in cd-person');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd-person');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in cd-person');
  }

}
