import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';

@Component({
  selector: 'app-visualizza-draghi',
  templateUrl: './visualizza-draghi.component.html',
  styleUrls: ['./visualizza-draghi.component.css']
})
export class VisualizzaDraghiComponent {

  constructor(public dati:DatiServizioService){

  }

  Dati(){
    return console.log(this.dati.getDati());
  }
}
