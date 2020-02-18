import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
  }

  login(email: string, password: string): Observable<any> {
    const body = JSON.stringify( {email, password} );
    const headers = new HttpHeaders( {'Content-Type' : 'application/json'} );
    // conectamos al backend y obtenemos el token
    return this.httpClient.post( this.url + 'usuario/login', body , {headers} );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
