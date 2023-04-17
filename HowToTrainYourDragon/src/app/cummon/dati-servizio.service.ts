import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatiServizioService {
  [x: string]: any;

 constructor(public http:HttpClient) { }

  getDati(): void {
      this.http.get('../../assets/draghi.json').subscribe(dato =>{
        
        console.log(dato);
      });
  }
}

