import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  vet : any;

  constructor(public dati:DatiServizioService){

  }

  Dati(){
    this.dati['/draghi'];
    return console.log(this.dati.getDati());
  }
}
