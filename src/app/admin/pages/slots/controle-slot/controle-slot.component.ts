import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotHorario } from 'src/app/core/_models/slot/SlotHorario';
import { SlotHorarioFormErrors } from '../slot-horario-form-errors';

@Component({
  selector: 'app-controle-slot',
  templateUrl: './controle-slot.component.html',
  styleUrls: ['./controle-slot.component.css']
})
export class ControleSlotComponent implements OnInit {

  postoVacinacaoId;

  slotFormErrors: SlotHorarioFormErrors = new SlotHorarioFormErrors();

  postoDateStr = "00/00/0000";
  postoNameStr = "Campestre";

  slots: Array<SlotHorario>;

  slotDataForm: FormGroup;

  showCriation: boolean;

  constructor(private router: Router, private route: ActivatedRoute,  private fb: FormBuilder) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['id'];
      
      if (!this.postoVacinacaoId) {
        this.goBack();
      }
    })

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


    this.createForms();
  }

  createForms() {

    this.slotDataForm = this.fb.group({

      horaInicio: new FormControl({value: '08:45', disabled: false}, Validators.compose([Validators.required])),
      horaFim: new FormControl({value: '08:50', disabled: false}, Validators.compose([Validators.required])),
      quantidadePessoas: new FormControl({value: '100', disabled: false}, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['admin', 'editPostoVacinacao'], { queryParams: { id: this.postoVacinacaoId }});   
  }

  removeAllSlots() {
    this.slots = new Array<SlotHorario>();
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  getFieldValue(form: FormGroup, field: string) {
    return form.get(field).value;
  }

  create() {
    let slot = new SlotHorario();
    slot.SlotHorario(this.getFieldValue(this.slotDataForm, "horaInicio"), this.getFieldValue(this.slotDataForm, "horaFim"), this.getFieldValue(this.slotDataForm, "quantidadePessoas"));
    this.slots.push(slot);
    this.showCriation = false;
  }

  showCreate() {
    this.showCriation = true;
  }

  cancelCreation() {
    this.showCriation = false;
  }

}
