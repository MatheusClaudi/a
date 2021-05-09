import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/_models/user/User';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { UserService } from 'src/app/core/_services/http/user/user.service';
import { LocalVariable } from 'src/app/core/_services/local-storage/local-variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _auth_service: AuthenticationService, private _user_service: UserService) { 
    this.form = this.fb.group({
      email: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
      senha: new FormControl({value: '', disabled: false}, Validators.compose([Validators.required])),
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

  onSubmit(){
    let senha = this.getFieldValue(this.form, 'senha');
    let email = this.getFieldValue(this.form, 'email');

    console.log(this.form)

    this._auth_service.login(email, senha).subscribe(
      (data) => {

        this._auth_service.setLocalVariable(LocalVariable.Token, data.token)
        this._auth_service.setLocalVariable(LocalVariable.UserId, data.user.id)

        this._user_service.getUserById(data.user.id).subscribe(
          (data) => {
            this._auth_service.setLocalVariable(LocalVariable.Role, data.user.role)
            console.log(data.user.role)
            this.router.navigate(['admin']);  
          }
        )
      }
    )
  }

  goToForgotPassword() {
    this.router.navigate(['forgot']);  
  }

}
