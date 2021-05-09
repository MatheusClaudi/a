import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteVacinaFormErrors } from '../lote-vacina-form-errors';

@Component({
  selector: 'app-edit-lote-vacina',
  templateUrl: './edit-lote-vacina.component.html',
  styleUrls: ['./edit-lote-vacina.component.css']
})
export class EditLoteVacinaComponent implements OnInit {

  loteVacinaDataForm: FormGroup;

  loteVacinaFormErrors: LoteVacinaFormErrors = new LoteVacinaFormErrors();

  loteVacinaId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.loteVacinaId = params['id'];
      
      if (!this.loteVacinaId) {
        this.cancelFormSubmition();
      }
    })

    this.createForms();
  }

  createForms() {

    this.loteVacinaDataForm = this.fb.group({

      id: new FormControl('0', Validators.compose([Validators.required])),
      idPosto: new FormControl('0', Validators.compose([Validators.required])),
      idVacina: new FormControl('0', Validators.compose([Validators.required])),

      doses: new FormControl('1', Validators.compose([Validators.required])),
      validade: new FormControl('11/12/2000', Validators.compose([Validators.required])),

      quantidadeTotal: new FormControl('100', Validators.compose([Validators.required])),
      quantidadeUsada: new FormControl('0', Validators.compose([Validators.required])),
      quantidadeDisponivel: new FormControl('100', Validators.compose([Validators.required])),
      quantidadeLiberada: new FormControl('0', Validators.compose([Validators.required])),
     
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
