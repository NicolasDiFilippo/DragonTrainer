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


  getd(dati:object)
  {
    alert("ciao");  
    this.http.post('https://api.imgbb.com/1/upload?key=f846d53f241f112c5374bc04314dac91', dati).subscribe(qqqqq =>{
        
        console.log(qqqqq);
      });
  }
}

