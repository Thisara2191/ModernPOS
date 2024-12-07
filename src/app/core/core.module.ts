import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRippleDirective } from './button-ripple.directive';



@NgModule({
  declarations: [
    ButtonRippleDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonRippleDirective
  ]
})
export class CoreModule { }
