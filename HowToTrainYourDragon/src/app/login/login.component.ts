import { Component } from '@angular/core';
import { DatiServizioService } from '../common/dati-servizio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  stile1: string;
  stile2: string;
  nome: string="";
  password: string="";
  testoBottone1: string;
  testoBottone2: string;
  okNome: boolean = false;
  okPass: boolean = false;

  
  constructor(public service:DatiServizioService, public router:Router){
    this.stile2 = "";
    this.stile1 = "";
    this.testoBottone1 = "";
    this.testoBottone2 = "";
    this.service.setAbilita(false);
  }

  ngOnInit(){}
  
  
  abilita()
  {

    if(this.nome = ""){
      this.stile2 = "stile";
      this.testoBottone2 = "inserisci il nome utente";
    }else{
      this.stile2 = "";
      this.testoBottone2 = "";
      this.okNome = true;
    }

    if(this.password.length < 4){
      this.stile1 = "stile";
      this.testoBottone1 = "La password utente dev'essere composta da almeno 4 caratteri";
    }else if(this.password == ""){
      this.testoBottone1 = "";
      this.stile1 = "stile";
      this.testoBottone1 = "inserisci la password";
    }else{
      this.stile1 = "";
      this.testoBottone1 = "";
      this.okPass = true;
    }

    if(this.okNome && this.okPass){
      this.stile2 = "";
      this.router.navigate(['/', 'Home']);
      this.service.setAbilita(true);
    }
    
  }
}
