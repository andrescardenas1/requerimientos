import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiroPageRoutingModule } from './giro-routing.module';

import { GiroPage } from './giro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiroPageRoutingModule
  ],
  declarations: [GiroPage]
})
export class GiroPageModule {}
