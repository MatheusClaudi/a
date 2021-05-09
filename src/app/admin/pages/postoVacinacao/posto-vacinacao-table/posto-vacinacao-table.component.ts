import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostoVacinacao } from 'src/app/core/_models/postoVacinacao/PostoVacinacao';
import { Endereco } from 'src/app/core/_models/util/Endereco';
import { DateService } from 'src/app/core/_services/date/date.service';

@Component({
  selector: 'app-posto-vacinacao-table',
  templateUrl: './posto-vacinacao-table.component.html',
  styleUrls: ['./posto-vacinacao-table.component.css']
})
export class PostoVacinacaoTableComponent implements OnInit {

  page = 0;

  postosVacinacao = new Array();  

  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dateService: DateService) { 
    this.createForms();
 
    let endereco = new Endereco();
    endereco.Endereco("ipsun", "00000-000", "ipsun", "ipsun","ipsun");

    let endereco2 = new Endereco();
    endereco2.Endereco("ipsun", "00000-000", "ipsun", "ipsun","ipsun");
   
    let endereco3 = new Endereco();
    endereco3.Endereco("ipsun", "00000-000", "ipsun", "ipsun","ipsun");
   
    let endereco4 = new Endereco();
    endereco4.Endereco("ipsun", "00000-000", "ipsun", "ipsun","ipsun");
   
    let endereco5 = new Endereco();
    endereco5.Endereco("ipsun", "00000-000", "ipsun", "ipsun","ipsun");
   
   

    let postoVacinacao = new PostoVacinacao();
    postoVacinacao.PostoVacinacao(0, "ipsun", "dd", endereco);

    let postoVacinacao2 = new PostoVacinacao();
    postoVacinacao2.PostoVacinacao(0, "ipsun", "dd", endereco2);

    let postoVacinacao3 = new PostoVacinacao();
    postoVacinacao3.PostoVacinacao(0, "ipsun", "dd", endereco3);

    let postoVacinacao4 = new PostoVacinacao();
    postoVacinacao4.PostoVacinacao(0, "ipsun", "dd", endereco4);

    let postoVacinacao5 = new PostoVacinacao();
    postoVacinacao5.PostoVacinacao(0, "ipsun", "dd", endereco5);

    this.postosVacinacao.push(postoVacinacao);
    this.postosVacinacao.push(postoVacinacao2);
    this.postosVacinacao.push(postoVacinacao3);
    this.postosVacinacao.push(postoVacinacao4);
    this.postosVacinacao.push(postoVacinacao5);
   }

  createForms() {
  this.filterForm = this.fb.group({
      idFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      nomeFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      cepFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
      cidadeFilter: new FormControl({value: '', disabled: false}, Validators.compose([])),
  });
  }

  ngOnInit(): void {
  }

  createPostoVacinacao() {
    this.router.navigate(['admin', 'createPostoVacinacao']);  
  }
  editPostoVacinacao(postoVacinacao: PostoVacinacao) {
    this.router.navigate(['admin', 'editPostoVacinacao'], { queryParams: { id: postoVacinacao.id } });  
  }


  test() {
    console.log("teste")
  }

}