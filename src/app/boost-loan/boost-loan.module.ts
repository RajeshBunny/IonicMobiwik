import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoostLoanPageRoutingModule } from './boost-loan-routing.module';

import { BoostLoanPage } from './boost-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoostLoanPageRoutingModule
  ],
  declarations: [BoostLoanPage]
})
export class BoostLoanPageModule {}
