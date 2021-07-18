import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalStoresPageRoutingModule } from './local-stores-routing.module';

import { LocalStoresPage } from './local-stores.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalStoresPageRoutingModule,
    SharedModule
  ],
  declarations: [LocalStoresPage]
})
export class LocalStoresPageModule {}
