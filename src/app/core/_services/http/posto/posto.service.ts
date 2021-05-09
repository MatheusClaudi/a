import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostoService {

  private API = environment.apiUrl;

  private httpOptions: object;


  constructor(
    private router: Router,
    private http: HttpClient
  ) { 

    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  getPostoById(id: number): Observable<any> {
    let path = this.API + "/station/" + id;
    return this.http.get(path);
  } 
}
