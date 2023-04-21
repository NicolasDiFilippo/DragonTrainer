import { Component } from '@angular/core';
import { DatiServizioService } from '../cummon/dati-servizio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nome: string="";
  password: string="";
  testoBottone1: string;
  testoBottone2: string;

  constructor(public service:DatiServizioService, public router:Router){
    
    this.testoBottone1 = "";
    this.testoBottone2 = "";
    this.service.setAbilita(false);
  }

  abilita()
  {
    if(this.password == ""){
      this.testoBottone1 = "inserisci la password";
    }else{
      this.testoBottone1 = "";
    }

    if(this.nome == "" ){
      this.testoBottone2 = "inserisci il nome utente";
    }else{
      this.testoBottone2 = "";
    }


    if(this.nome && this.password != ""){
      this.router.navigate(['/', 'Home']);
      this.service.setAbilita(true);
      
    }
  }
}
