import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoteVacina } from 'src/app/core/_models/loteVacina/LoteVacina';
import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-lote-vacina-table',
  templateUrl: './lote-vacina-table.component.html',
  styleUrls: ['./lote-vacina-table.component.css']
})
export class LoteVacinaTableComponent implements OnInit {

  page = 0;

  lotesVacina = new Array();  

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService) { 
    this.createForms();
 
    let loteVacina = new LoteVacina();
    loteVacina.LoteVacina(0, 0, 0, 1, new Date(), 100, 0, 100, 0);

    let loteVacina2 = new LoteVacina();
    loteVacina2.LoteVacina(0, 0, 0, 1, new Date(), 100, 0, 100, 0);

    let loteVacina3 = new LoteVacina();
    loteVacina3.LoteVacina(0, 0, 0, 1, new Date(), 100, 0, 100, 0);

    let loteVacina4 = new LoteVacina();
    loteVacina4.LoteVacina(0, 0, 0, 1, new Date(), 100, 0, 100, 0);

    let loteVacina5 = new LoteVacina();
    loteVacina5.LoteVacina(0, 0, 0, 1, new Date(), 100, 0, 100, 0);

    this.lotesVacina.push(loteVacina);
    this.lotesVacina.push(loteVacina2);
    this.lotesVacina.push(loteVacina3);
    this.lotesVacina.push(loteVacina4);
    this.lotesVacina.push(loteVacina5);
   }

  createForms() {
  this.filterForm = this.fb.group({
      idFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idPostoFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      idVacinaFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      dosesFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      emailFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      validadeFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      quantidadeDosesFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),

  });
  }

  ngOnInit(): void {
  }

  createLoteVacina() {
    this.router.navigate(['admin', 'createLoteVacina']);  
  }
  editLoteVacina(loteVacina: LoteVacina) {
    this.router.navigate(['admin', 'editLoteVacina'], { queryParams: { id: loteVacina.id } });  
  }


  test() {
    console.log("teste")
  }

}