import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalStoresPage } from './local-stores.page';

const routes: Routes = [
  {
    path: '',
    component: LocalStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalStoresPageRoutingModule {}
