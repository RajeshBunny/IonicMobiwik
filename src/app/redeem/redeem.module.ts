import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemPageRoutingModule } from './redeem-routing.module';

import { RedeemPage } from './redeem.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemPageRoutingModule,
    SharedModule
  ],
  declarations: [RedeemPage]
})
export class RedeemPageModule {}
