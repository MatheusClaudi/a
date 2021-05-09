import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostoVacinacaoFormErrors } from '../posto-vacinacao-form-errors';


@Component({
  selector: 'app-edit-posto-vacinacao',
  templateUrl: './edit-posto-vacinacao.component.html',
  styleUrls: ['./edit-posto-vacinacao.component.css']
})
export class EditPostoVacinacaoComponent implements OnInit {

  postoVacinacaoDataForm: FormGroup;

  postoVacinacaoFormErrors: PostoVacinacaoFormErrors = new PostoVacinacaoFormErrors();

  postoVacinacaoId;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.postoVacinacaoId = params['id'];
      
      if (!this.postoVacinacaoId) {
        this.cancelFormSubmition();
      }
    })
    this.createForms();
  }

  createForms() {

    this.postoVacinacaoDataForm = this.fb.group({
      id: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      nome: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      horarioFuncionamento: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      
      cidade: new FormControl('', Validators.compose([Validators.required])),
      cep: new FormControl('', Validators.compose([Validators.required])),
      rua: new FormControl('', Validators.compose([Validators.required])),
      numero: new FormControl('', Validators.compose([Validators.required])),
      bairro: new FormControl('', Validators.compose([Validators.required])),
    });

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
    this.router.navigate(['admin', 'postoVacinacaoTable']);   
  }

  submitForm() {
  }

}
