import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoostLoanPage } from './boost-loan.page';

const routes: Routes = [
  {
    path: '',
    component: BoostLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoostLoanPageRoutingModule {}
