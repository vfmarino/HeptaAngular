import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotivoDeTroca } from 'src/app/modelos/motivo-de-troca/motivo-de-troca.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotivosTrocaService {

  PATH_OF_API = environment.apiUrl;
  constructor(private httpCliente: HttpClient) { }

  getMotivos(): Observable<MotivoDeTroca[]>{
    return this.httpCliente.get<MotivoDeTroca[]>(`${this.PATH_OF_API}/listarMotivos`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
      })
    });

  }
}
