import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersDealsPageRoutingModule } from './offers-deals-routing.module';

import { OffersDealsPage } from './offers-deals.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersDealsPageRoutingModule,
    SharedModule
  ],
  declarations: [OffersDealsPage]
})
export class OffersDealsPageModule {}
