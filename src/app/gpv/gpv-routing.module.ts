import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpvComponent } from './gpv/gpv.component';
import { ControlePostoComponent } from './pages/posto/controle-posto/controle-posto.component';
import { ControleSlotComponent } from './pages/posto/controle-slot/controle-slot.component';

const routes: Routes = [
  { path: '', component: GpvComponent, children: [
    { path: '', component: ControleSlotComponent, outlet: 'gpv'},
  ]},

  { path: 'controlePosto', component: GpvComponent, children: [
    { path: '', component: ControlePostoComponent, outlet: 'gpv'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpvRoutingModule { }
