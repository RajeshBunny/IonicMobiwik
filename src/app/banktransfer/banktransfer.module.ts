import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanktransferPageRoutingModule } from './banktransfer-routing.module';

import { BanktransferPage } from './banktransfer.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BanktransferPageRoutingModule
  ],
  declarations: [BanktransferPage]
})
export class BanktransferPageModule {}
