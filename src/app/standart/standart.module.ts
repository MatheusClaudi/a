import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { StandartComponent } from './standart/standart.component';
import { SharedModule } from '../shared/shared.module';
import { DadosPessoaisComponent } from './pages/user/dados-pessoais/dados-pessoais.component';
import { AgendamentoComponent } from './pages/agendamentos/agendamento/agendamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StandartComponent,
    DadosPessoaisComponent,
    AgendamentoComponent,

  ],
  imports: [
    CommonModule,
    StandartRoutingModule, 
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StandartModule { }
