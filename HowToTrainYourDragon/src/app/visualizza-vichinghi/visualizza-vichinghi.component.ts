import { Component } from '@angular/core';
import { Vichingo } from '../common/vichingo';
import { DatiServizioService } from '../common/dati-servizio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizza-vichinghi',
  templateUrl: './visualizza-vichinghi.component.html',
  styleUrls: ['./visualizza-vichinghi.component.css']
})

export class VisualizzaVichinghiComponent {
                                                    //--------------------- VARIABILI ---------------------
    listaVichinghi!: Vichingo[];
    currentVichingo!: Vichingo;
    currentVichingoName: string = '';
    avanti = true;
    vedi: string;
    disattivo: boolean = false;
    cerca2: string;
    cartaInv: boolean = false;

  //costruttore
  constructor(public dati:DatiServizioService, public service:DatiServizioService, public router:Router){
    this.vedi = "";
    this.cerca2 = "";
  }


                                                  // --------------------- METODI ---------------------

  //metodo che viene eseguito quando la pagina è stata caricata
  ngOnInit(){
    this.cerca2 = "cerca2norm";
    this.dati.getDati().subscribe(dati=>{
        this.listaVichinghi = dati; //assegno alla variabile locale la lista di vichinghi
        console.log(this.listaVichinghi);
    });

    if(this.service.getAbilita() == false){
      this.router.navigate(['/', 'Login']); //se non sei loggato non puoi accedere a questa pagina
    }
  }

  //scrolla fino all'inizio della pagina
  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  //ritorna i dati
  Dati(){
    return console.log(this.dati.getDati()); 
  }

  //metodo che cambia il vichingo visualizzato in base al nome inserito nella barra di ricerca
  cambiaVichingo()
  {
    //se il nome inserito è vuoto, non visualizza nulla
    if(this.currentVichingoName == ''){
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca2 = "stile2";
    }else{
      this.vedi = "no2";
    }

    //scorre la lista di vichinghi
    for (let index = 26; index < this.listaVichinghi.length && this.avanti; index++){
      //se il nome inserito è uguale al nome di un vichingo, visualizza quel vichingo
      if(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase()){
        this.currentVichingo = this.listaVichinghi[index];
        console.log(this.currentVichingo);
        this.avanti = false;
        this.cerca2 = "stile2";
        this.cerca2 = "cerca2norm";
      }

      //se il nome inserito non è uguale al nome di un vichingo, non visualizza nulla
      if(!(this.listaVichinghi[index].firstName.toLowerCase() == this.currentVichingoName.toLowerCase() )){
        this.currentVichingo = this.listaVichinghi[-1]; //indice per non visualizzare nulla 
        this.cerca2 = "stile2";
        if(this.currentVichingoName == ''){ //se il nome inserito è vuoto, non visualizza nulla
          this.cerca2 = "stile2";
        }
      }

      if(this.currentVichingoName == ""){
        this.cerca2 = "cerca2norm";
      }
      
    }

  }

  //torna alla lista di vichinghi
  Torna(){
    this.avanti = true;
    this.vedi = "vedi2";
  }

  //metodo che visualizza la carta del vichingo selezionato con i suoi dettagli cliccando il pulsante
  Dettagli(i: number){
    this.currentVichingo = this.listaVichinghi[i - 1];
    this.vedi = "no2";
    this.currentVichingoName = this.currentVichingo.firstName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.currentVichingo);
  }

  //chiude la carta del vichingo
  Chiudi(){
    this.vedi = "vedi2";
    this.currentVichingoName = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
