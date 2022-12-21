import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarDashBoardService {

  private readonly API = environment.apiUrl+'/listaDePlantoes';

  constructor(private httpCliente: HttpClient) { }

  getDashboardList(): Observable<DashBoardPlantoes[]>{
    return this.httpCliente.get<DashBoardPlantoes[]>(`${this.API}`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
      })
    });

  }


}
