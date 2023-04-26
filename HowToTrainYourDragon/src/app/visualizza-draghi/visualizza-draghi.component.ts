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
    currentDragon!: Drago;
    currentDragonName: string = '';
    avanti = true;
    vedi: string;
    
  constructor(public dati:DatiServizioService){
    this.vedi = "";
  }

  ngOnInit(){
    this.dati.getDati().subscribe(dati=>{
        this.listaDraghi = dati;
    })
  }
  
  Dati(){
    
    return console.log(this.dati.getDati());
  }

  cambiaDrago()
  {
    if(this.currentDragonName == ''){
      this.avanti = true;
      this.vedi = "vedi2";
    }else{
      this.vedi = "no";
    }

    

    for (let index = 0; index < this.listaDraghi.length && this.avanti; index++)
    {
      if (this.listaDraghi[index].name.toUpperCase() == this.currentDragonName.toUpperCase())
      {
        this.currentDragon = this.listaDraghi[index];
        console.log(this.currentDragon);
        this.avanti = false;

      }
    }

   
  }


}
