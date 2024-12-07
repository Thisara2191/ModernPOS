import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-default-action-button',
  templateUrl: './default-action-button.component.html',
  styleUrls: ['./default-action-button.component.css']
})
export class DefaultActionButtonComponent implements AfterViewInit{
  @Input({required:true}) buttonUI:'primary'|'secondary' = 'primary'
  @Input({required:true}) buttonType:'menu'|'submit' | 'reset'|'button' = 'button'
  @Input({required:true}) buttonText:string = 'Click Me'
  @Input({required:true}) buttonBackground:string[] = [];
  @Input({required:false}) height:string = '45px'

  @ViewChild('buttonInstance') buttonInstance!: ElementRef<HTMLButtonElement>;

  @HostBinding('style.--button-primary') buttonPrimaryColor: string = 'red';
  @HostBinding('style.--button-secondary') buttonSecondaryColor: string = 'green';

  constructor(private render: Renderer2) {}

  ngAfterViewInit(): void {
    this.render.setStyle(this.buttonInstance.nativeElement, 'height', this.height);

    if (this.buttonBackground.length >= 2) {
      const [primaryColor, secondaryColor] = this.buttonBackground;

      this.buttonPrimaryColor = primaryColor;
      this.buttonSecondaryColor = secondaryColor;
    }

  }
}
