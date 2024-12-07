import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyDasboardComponent } from './pharmacy-dasboard/pharmacy-dasboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PharmacyOrderComponent } from './pharmacy-order/pharmacy-order.component';
import { PharmacyLayoutComponent } from './pharmacy-layout/pharmacy-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { PharmacyBillingComponent } from './pharmacy-billing/pharmacy-billing.component';


@NgModule({
  declarations: [
    PharmacyDasboardComponent,
    PharmacyOrderComponent,
    PharmacyLayoutComponent,
    PharmacyBillingComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule,
  ]
})
export class PharmacyModule { }
