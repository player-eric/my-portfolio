import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[projectDetailHost]'
})
export class ProjectDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
