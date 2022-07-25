import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
  { path: '', redirectTo: '/temperature', pathMatch: 'full' }, 
  { path: 'temp', component: TempComponent }, 
  { path: 'exchange', component: ExchangeComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
