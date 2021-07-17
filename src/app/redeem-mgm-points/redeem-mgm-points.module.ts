import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemMgmPointsPageRoutingModule } from './redeem-mgm-points-routing.module';

import { RedeemMgmPointsPage } from './redeem-mgm-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemMgmPointsPageRoutingModule
  ],
  declarations: [RedeemMgmPointsPage]
})
export class RedeemMgmPointsPageModule {}
