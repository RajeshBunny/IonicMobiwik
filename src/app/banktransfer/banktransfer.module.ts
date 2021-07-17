import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanktransferPageRoutingModule } from './banktransfer-routing.module';

import { BanktransferPage } from './banktransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanktransferPageRoutingModule
  ],
  declarations: [BanktransferPage]
})
export class BanktransferPageModule {}
