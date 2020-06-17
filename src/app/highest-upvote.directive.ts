import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  highlighted: Quote;

  constructor(private elem: ElementRef){ }

  @HostBinding('highlight') highlight(){
    this.textHighlight('yellow');
  }
  private textHighlight(action: string){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
