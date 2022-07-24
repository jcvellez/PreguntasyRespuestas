import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl!: string;
  myApiUrl!: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Usuario';
  }
  //http://localhost:21910/api/Usuario -- POST
  saveUser(usuario: Usuario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  };
}
