import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MotivoDeTroca } from 'src/app/modelos/motivo-de-troca/motivo-de-troca.module';
import { environment } from 'src/environments/environment';
import { Plantao } from '../../modelos/dash-board/dash-board.module';
import { Usuarios } from '../../modelos/usuario-modelo/usuario-modelo.module';

@Injectable({
  providedIn: 'root'
})
export class TrocaDePlantaoService {

  PATH_OF_API = environment.apiUrl;
  token: any;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(

    private httpclient: HttpClient
  ) { }

  getPlantaoById(id: number) {
    const token = `Bearer ${localStorage.getItem('token') || ''}`;
    const url = `${this.PATH_OF_API}/dadosDePlantaoById/${id}`;
    return this.httpclient.get<Plantao>(url, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });
  }

  updatePlantaoByID(id: number, dashBoardPlantoes: number) {
    return this.httpclient.put(`${this.PATH_OF_API}/recolocarPlantao/${id}`+`/${dashBoardPlantoes}`, {},{
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });

  }
  aceitarPlantaoByID(id: number, user: number) {
    return this.httpclient.put(`${this.PATH_OF_API}/aceitarPlantao/${id}/${user}`,
      {
        headers: new HttpHeaders({
          Authorization: "Bearer " + localStorage.getItem("token") || ''
        })
      }

    );
  }

  ListarPlantoesEmTroca(): Observable<Plantao[]> {
    return this.httpclient.get<Plantao[]>(`${this.PATH_OF_API}` + '/plantaoByStatus/', {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });

  }

  criarMotivoDeTrocaDePlantao(motivoDeTroca: MotivoDeTroca): Observable<any> {
    return this.httpclient.post<any>(`${this.PATH_OF_API}` + '/motivos', motivoDeTroca, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token") || ''
      })
    });
  }
}
