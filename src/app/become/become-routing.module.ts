import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomePage } from './become.page';

const routes: Routes = [
  {
    path: '',
    component: BecomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomePageRoutingModule {}
