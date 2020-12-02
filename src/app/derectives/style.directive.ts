import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'green';
  // @Input() fontWeight = 'normal';
  @Input() dStyle: { border?: string, fontWeight?: string, borderRadius?: string };

  constructor(private el: ElementRef, private r: Renderer2) {
    //  this.r.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    //  this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
