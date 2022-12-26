import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashBoardPlantoes } from '../modelos/dash-board/dash-board.module';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  plantoes: DashBoardPlantoes[] | undefined;
  PATH_OF_API = 'http://localhost:8080';
  startDate!:Date;
  endDate!:Date;

  constructor(private httpclient: HttpClient) {


  }

  buscarPlantoesPorUsuario(startDate: Date, endDate: Date) {
    return this.httpclient.get(`${this.PATH_OF_API}/relatorioFinanceiro`, {
      params: new HttpParams().set('startDate', startDate.toLocaleString()).set('endDate', endDate.toLocaleString()),
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
      })
    });
  }

  quantidadeDePlantoesPorUsuario(){
    return this.httpclient.get(`${this.PATH_OF_API}/quantidadePlantoesUser`, {

      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
      })
    });

  }
}
