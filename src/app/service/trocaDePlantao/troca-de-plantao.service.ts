import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashBoardPlantoes } from '../../modelos/dash-board/dash-board.module';
import { Usuarios } from '../../modelos/usuario-modelo/usuario-modelo.module';

@Injectable({
  providedIn: 'root'
})
export class TrocaDePlantaoService {

  PATH_OF_API = 'http://localhost:8080';
  token : any;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(

    private httpclient: HttpClient
  ) { }

  getPlantaoById(id: number) {
    const token = `Bearer ${localStorage.getItem('jwtToken') || ''}`;
    const url = `${this.PATH_OF_API}/dadosDePlantaoById/${id}?token=${token}`;
    return this.httpclient.get<DashBoardPlantoes>(url, {
      headers: new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
    }) });
  }

  updatePlantaoByID(id:number,dashBoardPlantoes: DashBoardPlantoes){
    return this.httpclient.put(`${this.PATH_OF_API}/recolocarPlantao/${id}`, dashBoardPlantoes,
    {
    headers: new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
    }) }

    );
  }
  aceitarPlantaoByID(id:number, user: number){
    return this.httpclient.put(`${this.PATH_OF_API}/aceitarPlantao/${id}/${user}`, user,
    {
    headers: new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
    }) }

    );
  }

  ListarPlantoesEmTroca(): Observable<DashBoardPlantoes[]>{
    return this.httpclient.get<DashBoardPlantoes[]>(`${this.PATH_OF_API}`+'/listarPlantoesEmTroca',  {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("jwtToken") || ''
      })
    });

  }
}
