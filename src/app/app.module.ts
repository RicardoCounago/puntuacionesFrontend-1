import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadorComponent } from './lista-jugador/lista-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { EditJugadorComponent } from './edit-jugador/edit-jugador.component';
import { LoginComponent } from './login/login.component';
import { GestionPuntuacionesComponent } from './gestion-puntuaciones/gestion-puntuaciones.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListaJugadorComponent,
    AddJugadorComponent,
    MenuComponent,
    LoginComponent,
    EditJugadorComponent,
    GestionPuntuacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
