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
  testoBottone: string;

  constructor(public service:DatiServizioService, public router:Router){
    
    this.testoBottone = "";
    this.service.setAbilita(false);
  }

  abilita()
  {
    if(this.nome == "" || this.password == "" ){
      this.testoBottone = "inserisci la password e/o il nome utente";
    }
    else{
      this.router.navigate(['/', 'Home']);
    }
       
      
  }
}
