import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  PATH_OF_API = 'http://localhost:8080';

  token : any;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  constructor(
    private httpclient: HttpClient,

  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }



  getUser() {
    const userId = localStorage.getItem('userId');
    const token = `Bearer ${localStorage.getItem('jwtToken') || ''}`;
    const url = `${this.PATH_OF_API}/listUser/${userId}?token=${token}`;
    return this.httpclient.get<Usuarios>(url, {
      headers: new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
    }) });
  }

  getDadosDePlantoes(userID: number) {
    const userId = localStorage.getItem('userId');
    const token = `Bearer ${localStorage.getItem('jwtToken') || ''}`;
    const url = `${this.PATH_OF_API}/DadosDePlantoes/dadosDePlantoes/${userId}?token=${token}`;
    return this.httpclient.get<DashBoardPlantoes[]>(url, { params: { userID } });
  }

  registrarUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.httpclient.post<Usuarios>(`${this.PATH_OF_API}`+'/registerNewUser', usuario);
  }


}
