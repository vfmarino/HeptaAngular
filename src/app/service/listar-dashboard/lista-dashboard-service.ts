import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantao } from 'src/app/modelos/dash-board/dash-board.module';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarDashBoardService {

  private readonly API = environment.apiUrl+'/plantao';

  constructor(private httpCliente: HttpClient) { }

  getDashboardList(): Observable<Plantao[]>{
    return this.httpCliente.get<Plantao[]>(`${this.API}`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });

  }


}
