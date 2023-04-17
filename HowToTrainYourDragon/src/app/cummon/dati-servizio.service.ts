import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatiServizioService {

 constructor(public http:HttpClient) { }

  getDati(): void {
      this.http.get('./draghi.json').subscribe(dato =>{
        console.log(dato);
      });
  }

}

