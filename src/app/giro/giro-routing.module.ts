import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiroPage } from './giro.page';

const routes: Routes = [
  {
    path: '',
    component: GiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiroPageRoutingModule {}
