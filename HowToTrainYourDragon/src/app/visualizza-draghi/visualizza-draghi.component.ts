import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';
import { Drago } from '../cummon/drago';
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
    
  constructor(public dati:DatiServizioService, private service:DatiServizioService, public router:Router){
    this.vedi = "";
    this.cerca = "";

  }

  ngOnInit(){
    this.dati.getDati().subscribe(dati=>{
        this.listaDraghi = dati;
    })
      if(this.service.getAbilita() == false){
        this.router.navigate(['/', 'Login']);
      }
  }
  
  Dati(){
    
    return console.log(this.dati.getDati());
  }

  cambiaDrago()
  {
    if(this.currentDragonName == ''){
      this.avanti = true;
      this.vedi = "vedi2";
      this.cerca = "stile2";
    }else{
      this.vedi = "no";
    }

    for (let index = 0; index < this.listaDraghi.length && this.avanti; index++)
    {
      if (this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase())
      {
        this.currentDragon = this.listaDraghi[index];
        console.log(this.currentDragon);
        this.avanti = false;
        this.cerca = "stile2";
      }

      if(!(this.listaDraghi[index].name.toLowerCase() == this.currentDragonName.toLowerCase())){

        this.currentDragon = this.listaDraghi[-1]; //indice per non visualizzare nulla 
        this.cerca = "stile";
        if(this.currentDragonName == ''){
          this.cerca = "stile2";
        }
      }
    }
   
  }


}
