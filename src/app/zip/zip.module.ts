import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZIPPageRoutingModule } from './zip-routing.module';

import { ZIPPage } from './zip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZIPPageRoutingModule
  ],
  declarations: [ZIPPage]
})
export class ZIPPageModule {}
