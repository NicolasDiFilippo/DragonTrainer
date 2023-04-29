import { Component } from '@angular/core';
import { Vichingo } from '../cummon/vichingo';
import { DatiServizioService } from '../cummon/dati-servizio.service';
import { Router } from '@angular/router';

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
    cerca2: string;

  constructor(public dati:DatiServizioService, public service:DatiServizioService, public router:Router){
    this.vedi = "";
    this.cerca2 = "";
  }

  ngOnInit(){
    this.dati.getDati().subscribe(dati=>{
        this.listaVichinghi = dati;
    });
    
    if(this.service.getAbilita() == false){
      this.router.navigate(['/', 'Login']);
    }
  }
  
  Dati(){
    return console.log(this.dati.getDati());
  }

  cambiaVichingo()
  {
    if(this.currentVichingoName == ''){
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca2 = "stile2";
    }else{
      this.vedi = "no2";
    }

    for (let index = 26; index < this.listaVichinghi.length && this.avanti; index++){

      if(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase()){
        this.currentVichingo = this.listaVichinghi[index];
        console.log(this.currentVichingo);
        this.avanti = false;
        this.cerca2 = "stile2";
      }

      if(!(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase() )){
        this.currentVichingo = this.listaVichinghi[-1]; //indice per non visualizzare nulla 
        this.cerca2 = "stile2";
        if(this.currentVichingoName == ''){
          this.cerca2 = "stile2";
        }
      }

      
    }

  }


}
