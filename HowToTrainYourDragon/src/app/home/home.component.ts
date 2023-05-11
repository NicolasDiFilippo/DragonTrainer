import { Component } from '@angular/core';
import { DatiServizioService } from '../common/dati-servizio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  constructor(public dati:DatiServizioService){

  }

  Dati(){
    return console.log(this.dati.getDati());
  }
}
