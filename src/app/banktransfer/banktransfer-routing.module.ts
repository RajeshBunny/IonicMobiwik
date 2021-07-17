import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanktransferPage } from './banktransfer.page';

const routes: Routes = [
  {
    path: '',
    component: BanktransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanktransferPageRoutingModule {}
