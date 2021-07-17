import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MutualPageRoutingModule } from './mutual-routing.module';

import { MutualPage } from './mutual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MutualPageRoutingModule
  ],
  declarations: [MutualPage]
})
export class MutualPageModule {}
