import { Relatorio } from './../modelos/relatorioFinanceiro/Relatorio';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plantao } from '../modelos/dash-board/dash-board.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  relatorios:Relatorio[]=[];
  PATH_OF_API = environment.apiUrl;
  startDate!:Date;
  endDate!:Date;

  constructor(private httpclient: HttpClient) {


  }

  buscarPlantoesPorUsuario(startDate: Date, endDate: Date) {
    return this.httpclient.get(`${this.PATH_OF_API}/relatorioFinanceiro`, {
      params: new HttpParams().set('startDate', startDate.toLocaleString()).set('endDate', endDate.toLocaleString()),
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });
  }

  relatorio():Observable<Relatorio[]>{
    return this.httpclient.get<Relatorio[]>(`${this.PATH_OF_API}/plantao/relatorio`, {

      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });

  }
}
