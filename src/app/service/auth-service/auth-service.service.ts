import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserAuthService } from '../user-auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,

  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }


  registrarUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.httpclient.post<Usuarios>(`${this.PATH_OF_API}`+'/registerNewUser', usuario);
  }
}
