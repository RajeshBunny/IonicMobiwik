import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeBillsPageRoutingModule } from './recharge-bills-routing.module';

import { RechargeBillsPage } from './recharge-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeBillsPageRoutingModule
  ],
  declarations: [RechargeBillsPage]
})
export class RechargeBillsPageModule {}
