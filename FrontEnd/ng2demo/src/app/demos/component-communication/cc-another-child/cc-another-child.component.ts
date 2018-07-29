import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cc-another-child',
  templateUrl: './cc-another-child.component.html',
  styleUrls: ['./cc-another-child.component.scss']
})
export class CcAnotherChildComponent implements OnInit {

  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

}
