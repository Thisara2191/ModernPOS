import { PharmacyBillingComponent } from './pharmacy-billing/pharmacy-billing.component';
import { PharmacyLayoutComponent } from './pharmacy-layout/pharmacy-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyDasboardComponent } from './pharmacy-dasboard/pharmacy-dasboard.component';
import { PharmacyOrderComponent } from './pharmacy-order/pharmacy-order.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyLayoutComponent,
    children: [
      { path: '', pathMatch:'full', component: PharmacyDasboardComponent },
      { path: 'order', component: PharmacyOrderComponent },
      { path: 'bill', component: PharmacyBillingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
