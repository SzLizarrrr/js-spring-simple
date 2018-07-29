import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appMyif(person) {
    if(person) { // append
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else{
      this.viewContainerRef.clear();
    }
  }
}
