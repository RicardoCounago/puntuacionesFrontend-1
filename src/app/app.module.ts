import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadorComponent } from './lista-jugador/lista-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJugadorComponent } from './add-jugador/add-jugador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { EditJugadorComponent } from './edit-jugador/edit-jugador.component';
>>>>>>> 225f58a2b41cf4b774709c5cced608564b463068

@NgModule({
  declarations: [
    AppComponent,
    ListaJugadorComponent,
    AddJugadorComponent,
    MenuComponent,
    LoginComponent
    EditJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
