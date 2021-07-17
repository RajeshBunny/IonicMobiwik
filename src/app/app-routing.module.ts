import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rechargebills',
    pathMatch: 'full'
  },
  {
    path: 'rechargebills',
    loadChildren: () => import('./recharge-bills/recharge-bills.module').then( m => m.RechargeBillsPageModule)
  },
  {
    path: 'banktransfer',
    loadChildren: () => import('./banktransfer/banktransfer.module').then( m => m.BanktransferPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers-deals/offers-deals.module').then( m => m.OffersDealsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
