import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[buttonRipple]'
})
export class ButtonRippleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add keyframes for ripple animation dynamically
    const styleSheet = document.styleSheets[0];
    const rippleKeyframes = `
      @keyframes ripple-animation {
        0% {
          transform: scale(0);
          opacity: 0.3;
        }
        50% {
          transform: scale(4);
          opacity: 0.5;
        }
        100% {
          transform: scale(6);
          opacity: 0;
        }
      }
    `;
    styleSheet.insertRule(rippleKeyframes, styleSheet.cssRules.length);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const button = this.el.nativeElement; // The button (or element) with the directive applied
    const ripple = this.renderer.createElement('div'); // Create the ripple element

    // Set ripple's style
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - rect.left - size / 2; // Calculate the x position of the click
    const y = event.clientY - rect.top - size / 2;  // Calculate the y position of the click

    // Set ripple's styles
    this.renderer.setStyle(ripple, 'position', 'absolute');
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'border-radius', '50%');
    this.renderer.setStyle(ripple, 'background', 'rgba(255, 255, 255, 0.7)');
    this.renderer.setStyle(ripple, 'transform', 'scale(0)');
    this.renderer.setStyle(ripple, 'animation', 'ripple-animation 0.6s linear');

    this.renderer.appendChild(button, ripple);

    setTimeout(() => {
      this.renderer.removeChild(button, ripple);
    }, 600);
  }


}
