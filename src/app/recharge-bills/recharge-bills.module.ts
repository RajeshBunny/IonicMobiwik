import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeBillsPageRoutingModule } from './recharge-bills-routing.module';

import { RechargeBillsPage } from './recharge-bills.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RechargeBillsPageRoutingModule
  ],
  declarations: [RechargeBillsPage]
})
export class RechargeBillsPageModule {}
