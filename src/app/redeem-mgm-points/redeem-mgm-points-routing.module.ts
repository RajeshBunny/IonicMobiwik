import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemMgmPointsPage } from './redeem-mgm-points.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemMgmPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemMgmPointsPageRoutingModule {}
