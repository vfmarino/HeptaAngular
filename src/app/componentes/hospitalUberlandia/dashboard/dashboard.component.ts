import { Component, OnInit } from '@angular/core';

import { ListarDashBoardService } from 'src/app/service/listar-dashboard/lista-dashboard-service';
import { Router } from '@angular/router';
import { Plantao } from 'src/app/modelos/dash-board/dash-board.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  plantoes: Plantao[] = [];
  selecionado: boolean = false;
  cor!: string;
  setor!: string;
  local: any;

  dataInicial: Date = new Date()
  dataFinal: Date = new Date();

  constructor(
    private listarDashBoardService: ListarDashBoardService,
    private route: Router


  ) { }

  ngOnInit(): void {
    console.log(this.dataFinal);
    this.dataInicial = new Date();
    this.getDashboradPlantoes();
    console.log(this.plantoes);
  }

  calcular() {
    console.log(this.dataFinal);
    this.getDashboradPlantoes();
  }

  private getDashboradPlantoes() {
    this.listarDashBoardService.getDashboardList().subscribe(response => this.plantoes = response);

  }

  public voltar() {
    let user = localStorage.getItem('userId');
    if (user !== null) {
      let role = JSON.parse(user).role.role;
      if (role === 'Admin') {
        this.route.navigate(['escalaDePlantoes/admin/listaDeMedicos']);
      }
      if (role === 'Medico') {
        this.route.navigate(['escalaDePlantoes/medico']);
      }
      if (role === 'Financeiro') {
        this.route.navigate(['escalaDePlantoes/financeiro/relatorios']);
      }
    }else{
      alert("Fazer Login");
      this.route.navigate(['/escalaDePlantoes/login']);
    }
  }
    selecionarCor(cor: string) {
      this.cor = "cor1";
      return this.cor;

    }
    Selecionado() {
      if (this.setor != '') {
        this.selecionado = true;
      } else {
        this.selecionado = false;
      }
    }

  }
