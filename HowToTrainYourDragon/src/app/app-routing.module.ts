import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaDraghiComponent } from './visualizza-draghi/visualizza-draghi.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: AppComponent},
  { path: "draghi", component: VisualizzaDraghiComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
