import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJugadorComponent } from './lista-jugador/lista-jugador.component';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';
import { LoginComponent } from './login/login.component';
import { EditJugadorComponent } from './edit-jugador/edit-jugador.component';


const routes: Routes = [
  {path: '', component: ListaJugadorComponent},
  {path: 'listaJugadores', component: ListaJugadorComponent},
  {path: 'addJugador', component: AddJugadorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editarJugador/:id', component: EditJugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
