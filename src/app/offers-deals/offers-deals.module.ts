import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersDealsPageRoutingModule } from './offers-deals-routing.module';

import { OffersDealsPage } from './offers-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersDealsPageRoutingModule
  ],
  declarations: [OffersDealsPage]
})
export class OffersDealsPageModule {}
