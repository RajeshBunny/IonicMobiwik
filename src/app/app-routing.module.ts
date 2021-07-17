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
  },
  {
    path: 'boostloan',
    loadChildren: () => import('./boost-loan/boost-loan.module').then( m => m.BoostLoanPageModule)
  },
  {
    path: 'localstores',
    loadChildren: () => import('./local-stores/local-stores.module').then( m => m.LocalStoresPageModule)
  },
  {
    path: 'redeem',
    loadChildren: () => import('./redeem/redeem.module').then( m => m.RedeemPageModule)
  },
  {
    path: 'redeemmgmpoints',
    loadChildren: () => import('./redeem-mgm-points/redeem-mgm-points.module').then( m => m.RedeemMgmPointsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'zip',
    loadChildren: () => import('./zip/zip.module').then( m => m.ZIPPageModule)
  },
  {
    path: 'mutual',
    loadChildren: () => import('./mutual/mutual.module').then( m => m.MutualPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'become',
    loadChildren: () => import('./become/become.module').then( m => m.BecomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
