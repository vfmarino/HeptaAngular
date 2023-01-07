import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Plantao } from 'src/app/modelos/dash-board/dash-board.module';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  PATH_OF_API = environment.apiUrl;

  token: any;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  constructor(
    private httpclient: HttpClient,
    private route: Router
  ) { }

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/auth/login', loginData, {
      headers: this.requestHeader,
    });
  }

getUser(): Observable<Usuarios> {
  let user = localStorage.getItem('userId');
  if (user !== null) {
    let id = JSON.parse(user).id;
    const url = `${this.PATH_OF_API}/users/${id}`;
    return this.httpclient.get<Usuarios>(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      }),
    });
  } else {
    alert('Fazer Login');
    this.route.navigate(['/escalaDePlantoes/login']);
    return throwError('Usuário não autenticado');
  }
}

  getDadosDePlantoes(userId: number): Observable<Plantao[]> {

    return this.httpclient.get<Plantao[]>(`${this.PATH_OF_API}/plantaoByUser/${userId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      }),
    });

  }

}
