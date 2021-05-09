import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GpvRoutingModule } from './gpv-routing.module';
import { GpvComponent } from './gpv/gpv.component';
import { SharedModule } from '../shared/shared.module';
import { ControleSlotComponent } from './pages/posto/controle-slot/controle-slot.component';
import { ControlePostoComponent } from './pages/posto/controle-posto/controle-posto.component';



@NgModule({
  declarations: [
    GpvComponent,
    ControleSlotComponent,
    ControlePostoComponent
  ],
  imports: [
    CommonModule,
    GpvRoutingModule,
    SharedModule
  ]
})
export class GpvModule { }
