import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomePageRoutingModule } from './become-routing.module';

import { BecomePage } from './become.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomePageRoutingModule
  ],
  declarations: [BecomePage]
})
export class BecomePageModule {}
