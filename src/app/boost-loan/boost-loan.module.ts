import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoostLoanPageRoutingModule } from './boost-loan-routing.module';

import { BoostLoanPage } from './boost-loan.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoostLoanPageRoutingModule,
    SharedModule
  ],
  declarations: [BoostLoanPage]
})
export class BoostLoanPageModule {}
