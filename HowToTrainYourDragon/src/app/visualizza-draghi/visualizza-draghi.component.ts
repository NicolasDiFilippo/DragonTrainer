import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';
import { Drago } from '../cummon/drago';

@Component({
  selector: 'app-visualizza-draghi',
  templateUrl: './visualizza-draghi.component.html',
  styleUrls: ['./visualizza-draghi.component.css']
})
export class VisualizzaDraghiComponent {

    listaDraghi!: Drago[];

  vett:any;
  constructor(public dati:DatiServizioService){
  }

  ngOnInit(){
    this.dati.getDati().subscribe(dati=>{
        this.listaDraghi = dati;
    })
  }
  
  Dati(){
    
    return console.log(this.dati.getDati());
  }


}
