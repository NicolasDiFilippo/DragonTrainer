import { Component } from '@angular/core';
import { DatiServizioService } from '../common/dati-servizio.service';
import { Drago } from '../common/drago';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizza-draghi',
  templateUrl: './visualizza-draghi.component.html',
  styleUrls: ['./visualizza-draghi.component.css']
})
export class VisualizzaDraghiComponent {

                                                       //----VARIABILI----
  listaDraghi!: Drago[];
  currentDragon!: Drago;
  currentDragonName: string = '';
  avanti = true;
  vedi: string;
  disattivo: boolean = false;
  cerca: string;
  listaImmagini!: Drago[];

  //costruttore
  constructor(public dati: DatiServizioService, private service: DatiServizioService, public router: Router) {
    this.vedi = "";
    this.cerca = "";
  }

                        //----------------------------------------------------METODI----------------------------------------------------

  //metodo che viene eseguito quando la pagina è stata caricata
  ngOnInit() {
    this.cerca = "cerca";
    this.dati.getDati().subscribe(dati => { //assegno alla variabile locale la lista di draghi
      this.listaDraghi = dati;
    })
    
    if (this.service.getAbilita() == false) {
      this.router.navigate(['/', 'Login']); //se non sei loggato non puoi accedere a questa pagina
    }
  }

  //ritorna i dati
  Dati() {
    return console.log(this.dati.getDati());
  }

  //scrolla fino all'inizio della pagina
  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //metodo che cambia il drago visualizzato in base al nome inserito nella barra di ricerca
  cambiaDrago() {
    if (this.currentDragonName == '') { //se il nome inserito è vuoto, non visualizza nulla
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca = "stile2";
    } else {
      this.vedi = "no";
    }

    //ciclo che scorre la lista di draghi
    for (let index = 0; index < this.listaDraghi.length && this.avanti; index++) {
      //se il nome inserito è uguale a quello di un drago, visualizza il drago
      if (this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase()) { 
        this.currentDragon = this.listaDraghi[index];
        console.log(this.currentDragon);
        this.avanti = false;
        this.cerca = "stile2";
        this.cerca = "cerca";
      }

      //se il nome inserito non è uguale a quello di un drago, non visualizza nulla
      if (!(this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase())) {
        this.currentDragon = this.listaDraghi[-1]; //indice per non visualizzare nulla 
        this.cerca = "stile";
        if (this.currentDragonName == '') { //se il nome inserito è vuoto, non visualizza nulla
          this.cerca = "stile2";
        }
      }
      if(this.currentDragonName == ""){
        this.cerca = "cerca"
      }
    }

  }

  //metodo che visualizza la lista di draghi
  Torna(){
    this.avanti = true;
    this.vedi = "vedi2";
  }


  //metodo che visualizza i dettagli di un drago
  Dettagli(i: number){
    this.currentDragon = this.listaDraghi[i - 1];
    this.vedi = "no2";
    this.currentDragonName = this.currentDragon.name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.currentDragon);
  }

  //metodo che chiude i dettagli di un drago
  Chiudi(){
    this.vedi = "vedi2";
    this.currentDragonName = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
