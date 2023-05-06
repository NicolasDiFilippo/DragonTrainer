import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DatiServizioService {
  @Output() autorizzato: boolean;

  constructor(public http: HttpClient, public router:Router) {
    this.autorizzato = false;
  }

  getDati(): Observable<any> {
    return this.http.get('/assets/draghi.json');
  }
  
  setAbilita(stato: boolean) {
    this.autorizzato = stato;
    
  }

  getAbilita(): boolean {
    return this.autorizzato;
  }

}

