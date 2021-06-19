import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener("click") likebuttonclick() {
    this.textDeco("white")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("black")
  }

  constructor(private elem: ElementRef) { }
   
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }

}

