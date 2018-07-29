import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges{

  @Input()
  person;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnChanges() {
    if(this.person) { // show
      this.elementRef.nativeElement.style.display = '';
    } else { // hide
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

}
