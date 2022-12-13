import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarDashBoardService {

  private readonly API = environment.apiUrl+'/auth/listaDePlantoes';

  constructor(private httpCliente: HttpClient) { }

  getDashboardList(): Observable<DashBoardPlantoes[]>{
    return this.httpCliente.get<DashBoardPlantoes[]>(`${this.API}`);

  }

  getMedicoById(id: number): Observable<Object>{
    return this.httpCliente.get<DashBoardPlantoes[]>(`${this.API}/${id}`);
  }
  updateMedico(id: number, clientes: DashBoardPlantoes): Observable<Object>{
    return this.httpCliente.put(`${this.API}/${id}`, clientes);
  }
}
