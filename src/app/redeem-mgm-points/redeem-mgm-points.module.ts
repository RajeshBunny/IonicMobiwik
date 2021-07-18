import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemMgmPointsPageRoutingModule } from './redeem-mgm-points-routing.module';

import { RedeemMgmPointsPage } from './redeem-mgm-points.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemMgmPointsPageRoutingModule,
    SharedModule
  ],
  declarations: [RedeemMgmPointsPage]
})
export class RedeemMgmPointsPageModule {}
