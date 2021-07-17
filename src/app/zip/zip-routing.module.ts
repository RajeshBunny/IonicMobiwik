import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZIPPage } from './zip.page';

const routes: Routes = [
  {
    path: '',
    component: ZIPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZIPPageRoutingModule {}
