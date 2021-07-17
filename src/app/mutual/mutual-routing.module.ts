import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MutualPage } from './mutual.page';

const routes: Routes = [
  {
    path: '',
    component: MutualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MutualPageRoutingModule {}
