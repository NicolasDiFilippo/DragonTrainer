import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaDraghiComponent } from './visualizza-draghi/visualizza-draghi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VisualizzaVichinghiComponent } from './visualizza-vichinghi/visualizza-vichinghi.component';

const routes: Routes = [

  { path: "", component: LoginComponent},
  { path: "Home", component: HomeComponent },
  { path: "Draghi", component: VisualizzaDraghiComponent },
  { path: "Vichinghi", component: VisualizzaVichinghiComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
