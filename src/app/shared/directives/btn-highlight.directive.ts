import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnHighlight]'
})

export class BtnHighlightDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = '#6fb1d7';
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseover') onMouseEnter() {
    this.highlight('#F33F3F');
  }

  @HostListener('mouseout') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.borderRadius = '4px';
    this.el.nativeElement.style.cursor = 'pointer';
  }

}
