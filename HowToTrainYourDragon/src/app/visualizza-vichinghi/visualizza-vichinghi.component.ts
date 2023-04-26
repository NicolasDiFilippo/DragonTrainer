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
    currentVichingo!: Vichingo;
    currentVichingoName: string = '';
    avanti = true;
    vedi: string;
    disattivo: boolean = false;
    cerca: string;

  constructor(public dati:DatiServizioService){
    this.vedi = "";
    this.cerca = "";
  }

  ngOnInit(){
    this.dati.getDati().subscribe(dati=>{
        this.listaVichinghi = dati;
    });
  }
  
  Dati(){
    return console.log(this.dati.getDati());
  }

  cambiaVichingo()
  {
    if(this.currentVichingoName == ''){
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca = "stile2";
    }else{
      this.vedi = "no";
    }

    for (let index = 0; index < this.listaVichinghi.length && this.avanti; index++){

      if(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase()){
        this.currentVichingo = this.listaVichinghi[index];
        console.log(this.currentVichingo);
        this.avanti = false;
        this.cerca = "stile2";
      }

      if(!(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase() )){

        this.currentVichingo = this.listaVichinghi[-1]; //indice per non visualizzare nulla 
        this.cerca = "stile";
        if(this.currentVichingoName == ''){
          this.cerca = "stile2";
        }
      }

    }

  }


}
