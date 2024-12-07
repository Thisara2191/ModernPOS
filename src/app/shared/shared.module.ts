import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSidebarComponent } from './default-sidebar/default-sidebar.component';
import { DefaultActionButtonComponent } from './default-action-button/default-action-button.component';



@NgModule({
  declarations: [
    DefaultSidebarComponent,
    DefaultActionButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DefaultSidebarComponent,
    DefaultActionButtonComponent
  ]
})
export class SharedModule { }
