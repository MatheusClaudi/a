import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  showSucessMensage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.showSucessMensage = true;
  }

  goToLogin() {
    this.router.navigate(['login']);  
  }

}
