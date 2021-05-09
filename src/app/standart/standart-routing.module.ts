import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPessoaisComponent } from './pages/user/dados-pessoais/dados-pessoais.component';
import { StandartComponent } from './standart/standart.component';
import { AgendamentoComponent } from './pages/agendamentos/agendamento/agendamento.component';



const routes: Routes = [
  { path: '', component: StandartComponent, children: [
    { path: '', component: DadosPessoaisComponent, outlet: 'standart'},
  ]},

  { path: 'dadosPessoais', component: StandartComponent, children: [
    { path: '', component: DadosPessoaisComponent, outlet: 'standart'},
  ]},

  { path: 'agendamento', component: StandartComponent, children: [
    { path: '', component: AgendamentoComponent, outlet: 'standart'},
  ]},

  /*
  { path: 'posts', component: StandartComponent, children: [
    { path: '', component: StandartPostListsComponent, outlet: 'standart'},
  ]},

  { path: 'schedules', component: StandartComponent, children: [
    { path: '', component: StandartSchedulesComponent, outlet: 'standart'},
  ]},

  { path: 'postData', component: StandartComponent, children: [
    { path: '', component: StantardtPostDataComponent, outlet: 'standart'},
  ]},

  { path: 'schedulesData', component: StandartComponent, children: [
    { path: '', component: StandartSchedulesDataComponent, outlet: 'standart'},
  ]}
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
