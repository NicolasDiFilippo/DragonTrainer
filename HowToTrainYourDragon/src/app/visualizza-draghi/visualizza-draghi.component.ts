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

  listaDraghi!: Drago[];
  currentDragon!: Drago;

  currentDragonName: string = '';
  avanti = true;
  vedi: string;
  disattivo: boolean = false;
  cerca: string;

  listaImmagini!: Drago[];

  constructor(public dati: DatiServizioService, private service: DatiServizioService, public router: Router) {
    this.vedi = "";
    this.cerca = "";
  }

  ngOnInit() {
    this.cerca = "cerca";
    this.dati.getDati().subscribe(dati => {
      this.listaDraghi = dati;
      for (let index = 0; index < dati.length; index++) {
        this.listaImmagini = dati[index].image;
        console.log(this.listaImmagini);
      }
      
    })
    
    if (this.service.getAbilita() == false) {
      this.router.navigate(['/', 'Login']);
    }
  }

  Dati() {

    return console.log(this.dati.getDati());
  }

  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cambiaDrago() {
    if (this.currentDragonName == '') {
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca = "stile2";
    } else {
      this.vedi = "no";
    }

    for (let index = 0; index < this.listaDraghi.length && this.avanti; index++) {
      if (this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase()) {
        this.currentDragon = this.listaDraghi[index];
        console.log(this.currentDragon);
        this.avanti = false;
        this.cerca = "stile2";
        this.cerca = "cerca";
      }

      if (!(this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase())) {
        this.currentDragon = this.listaDraghi[-1]; //indice per non visualizzare nulla 
        this.cerca = "stile";
        if (this.currentDragonName == '') {
          this.cerca = "stile2";
        }
      }

      if(this.currentDragonName == ""){
        this.cerca = "cerca"
      }
    }

  }
  Torna(){
    this.avanti = true;
    this.vedi = "vedi2";
  }


  Dettagli(i: number){
    this.currentDragon = this.listaDraghi[i - 1];
    this.vedi = "no2";
    this.currentDragonName = this.currentDragon.name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.currentDragon);
  }

  Chiudi(){
    this.vedi = "vedi2";
    this.currentDragonName = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
