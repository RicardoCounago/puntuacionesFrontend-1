import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/puntuacion';
  }

  borrarPuntuacion(idPuntuacion: string) {
    return this.httpClient.delete(this.url + '/' + idPuntuacion);
  }
}
