import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizzaDraghiComponent } from './visualizza-draghi/visualizza-draghi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VisualizzaVichinghiComponent } from './visualizza-vichinghi/visualizza-vichinghi.component';


@NgModule({
  declarations: [
    
    AppComponent,
    VisualizzaDraghiComponent,
    HomeComponent,
    LoginComponent,
    VisualizzaVichinghiComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
