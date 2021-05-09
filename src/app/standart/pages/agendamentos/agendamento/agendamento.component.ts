import { Component, OnInit } from '@angular/core';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  slots: Array<SlotHorario>;


  constructor() {
    this.slots = new Array<SlotHorario>();

    let slot = new SlotHorario();
    slot.SlotHorario("08:30", "09:30", 30);
    
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
    this.slots.push(slot);
   }

  ngOnInit(): void {
  }

  teste(event){
    console.log(event);
  }

}