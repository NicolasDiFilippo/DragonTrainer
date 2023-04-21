import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatiServizioService {
  autorizzato: boolean;

  constructor(public http: HttpClient) {
    this.autorizzato=false;
   }

  getDati(): Observable<any> {

    // this.http.get('../../assets/draghi.json').subscribe(dato =>{
    //   console.log(dato);
    // });
    return this.http.get('/assets/draghi.json');
  }

  setAbilita(stato: boolean) {
    this.autorizzato = stato;
  }

  getAbilita(): boolean {
    return this.autorizzato;
  }

}

