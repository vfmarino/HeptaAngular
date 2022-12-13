import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/modelos/Role/Role.module';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../../modelos/usuario-modelo/usuario-modelo.module';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  private readonly API = environment.apiUrl;

  constructor(private httpCliente: HttpClient) { }

  getUsuarioList(): Observable<Usuarios[]>{
    return this.httpCliente.get<Usuarios[]>(`${this.API}`+'/listar');

  }

  getProfissoes(): Observable<Role[]>{
    return this.httpCliente.get<Role[]>(`${this.API}`+'/profissoes');
  }

  registrarUsuario(usuario:Usuarios):Observable<Usuarios>{
    return this.httpCliente.post<Usuarios>(`${this.API}`+'/registerNewUser', usuario);
  }
}
