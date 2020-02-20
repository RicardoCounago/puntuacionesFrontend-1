import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuacion } from '../models/puntuacion';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/usuario';
  }

  getAllJugadores(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getJugador(id: string): Observable<any> {
    return this.httpClient.get(this.url + '/' + id);
  }


  addJugador(jugador: Jugador) {
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.url, body, { headers });
  }

  removeJugador(id: string) {
    return this.httpClient.delete(this.url + '/' + id); //DELETE http://localhost:5200/puntuacion/XXXXXX
  }

  updateJugador(id: string, jugador: Jugador) {
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.url + '/' + id, body, { headers }); // PUT http://localhost:5200/puntuacion/xxxxxx
  }

  getPuntuacionesJugador(idJugador: string) {
    return this.httpClient.get(this.url + '/' + idJugador + '/puntuacion');
  }

  addPuntuacion(idJugador: string, puntuacion: Puntuacion){
    puntuacion._id = undefined;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(puntuacion);
    return this.httpClient.post(this.url + '/' + idJugador + '/puntuacion' , body, {headers});
  }

  // TODO borrar, insert, update, delete
}
