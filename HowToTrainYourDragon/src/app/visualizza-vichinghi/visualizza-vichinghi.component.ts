import { Component } from '@angular/core';
import { Vichingo } from '../cummon/vichingo';
import { DatiServizioService } from '../cummon/dati-servizio.service';

@Component({
  selector: 'app-visualizza-vichinghi',
  templateUrl: './visualizza-vichinghi.component.html',
  styleUrls: ['./visualizza-vichinghi.component.css']
})
export class VisualizzaVichinghiComponent {
  listaVichinghi!: Vichingo[];

  vett:any;
  constructor(public dati:DatiServizioService){
  }

  ngOnInit(){
    this.dati.getDatiV().subscribe(dati=>{
        this.listaVichinghi = dati;
    })
  }
  
  Dati(){
    
    return console.log(this.dati.getDati());
  }
}
