import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacinaFormErrors } from '../lote-vacina-form-errors';

@Component({
  selector: 'app-create-lote-vacina',
  templateUrl: './create-lote-vacina.component.html',
  styleUrls: ['./create-lote-vacina.component.css']
})
export class CreateLoteVacinaComponent implements OnInit {

  loteVacinaDataForm: FormGroup;

  loteVacinaFormErrors: LoteVacinaFormErrors = new LoteVacinaFormErrors();

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForms();
  }

  createForms() {

    this.loteVacinaDataForm = this.fb.group({

      id: new FormControl('', Validators.compose([Validators.required])),
      idPosto: new FormControl('', Validators.compose([Validators.required])),
      idVacina: new FormControl('', Validators.compose([Validators.required])),

      doses: new FormControl('', Validators.compose([Validators.required])),
      validade: new FormControl('', Validators.compose([Validators.required])),

      quantidadeTotal: new FormControl('', Validators.compose([Validators.required])),
      quantidadeUsada: new FormControl('', Validators.compose([Validators.required])),
      quantidadeDisponivel: new FormControl('', Validators.compose([Validators.required])),
      quantidadeLiberada: new FormControl('', Validators.compose([Validators.required])),
     
    })
  }

  ngOnInit(): void {
  }

  hasErrorWith(form: FormGroup, field: string, error: string) {
    return form.get(field).hasError(error) && (form.get(field).dirty || form.get(field).touched);
  }

  getFieldValue(form: FormGroup, field: string) {
    return form.get(field).value;
  }

  cancelFormSubmition() {
    this.router.navigate(['admin', 'loteVacinaTable']);   
  }

  submitForm() {
  }

}
