import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersDealsPage } from './offers-deals.page';

const routes: Routes = [
  {
    path: '',
    component: OffersDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersDealsPageRoutingModule {}
