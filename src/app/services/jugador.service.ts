import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }

  getAllJugadores(): Jugador[] {
    //TODO acceder al api y obtener todos los jugadores
    //let j1 = new Jugador('1','juan',22);
    return [
      { id: '1', nombre: 'Juan', puntuacion: 22 },
      { id: '2', nombre: 'Pedro', puntuacion: 20 },
      { id: '3', nombre: 'Ana', puntuacion: 45 },
    ];
  }

  // TODO borrar, insert, update, delete
}