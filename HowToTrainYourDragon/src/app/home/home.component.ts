import { Component } from '@angular/core';
import { DatiServizioService } from '../common/dati-servizio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  constructor(public service: DatiServizioService,public dati:DatiServizioService, public router: Router){

  }

  ngOnInit() {
    if(this.service.getAbilita() == false){
      this.router.navigate(['/', 'Login']);
    }
  }
  

  Dati(){
    return console.log(this.dati.getDati());
  }
}
