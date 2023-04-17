import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaDraghiComponent } from './visualizza-draghi/visualizza-draghi.component';

const routes: Routes = [
  { path: 'Draghi', component: VisualizzaDraghiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
