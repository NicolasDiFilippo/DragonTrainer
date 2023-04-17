import { Component } from '@angular/core';
import { DatiServizioService } from './cummon/dati-servizio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HowToTrainYourDragon';
  
  constructor(public dati:DatiServizioService){

  }
  Dati(){
    this.dati['/draghi'];
    return console.log(this.dati.getDati());
  }

}