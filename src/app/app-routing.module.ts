import { SupermarketModule } from './modules/supermarket/supermarket.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pharmacy',
    loadChildren: () => import('src/app/modules/pharmacy/pharmacy.module').then((pm) => pm.PharmacyModule),
  },
  {
    path: 'supermarket',
    loadChildren: () => import('src/app/modules/supermarket/supermarket.module').then((sm) => sm.SupermarketModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
