import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayflexComponent } from './layflex/layflex.component';
import { LaygridComponent } from './laygrid/laygrid.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'flex', component: LayflexComponent
  },
  {
    path: 'grid', component: LaygridComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: NaoEncontradoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }