import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashBoardPlantoes } from '../modelos/dash-board/dash-board.module';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  plantoes: DashBoardPlantoes[] | undefined;

  startDate: Date;
  endDate: Date;

  constructor(private http: HttpClient) {

    const currentYear = new Date().getFullYear();
    const month = 3; // April (0-based index, so 0 = January, 1 = February, etc.)
    const lastDayOfMonth = new Date(currentYear, month + 1, 0).getDate();

    this.startDate = new Date(currentYear, month, 1);
    this.endDate = new Date(currentYear, month, lastDayOfMonth);

  }

  buscarPlantoesPorUsuario(startDate: Date, endDate: Date) {
    if (!startDate || !endDate) {
      return;
    }

    const token = `Bearer ${localStorage.getItem('jwtToken') || ''}`;
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    const params = { startDate: startDate.toISOString(), endDate: endDate.toISOString() };

    return this.http.post<Object[]>('/DadosDePlantoes/countUser', {}, { headers, params });
  }

}
