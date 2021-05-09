import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

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
