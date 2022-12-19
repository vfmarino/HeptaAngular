import { Component, OnInit } from '@angular/core';

import { ListarDashBoardService } from 'src/app/service/listar-dashboard/lista-dashboard-service';
import { Router } from '@angular/router';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  plantoes: DashBoardPlantoes[]=[];

  cor!: string;
  manha!: string;
  noite!: string;
  tarde!: string;

  dataAtual: Date = new Date()
  dataFinal: Date = new Date();
  dataInicial : Date = new Date()
  constructor(
        private listarDashBoardService: ListarDashBoardService,
    private route: Router

  ) {}

  ngOnInit(): void {
        this.getDashboradPlantoes();
        console.log(localStorage.getItem("roles"));

  }

  private getDashboradPlantoes(){
    this.listarDashBoardService.getDashboardList().subscribe(response =>this.plantoes = response);
  }

    public voltar(){
      if(localStorage.getItem("roleName") === 'Admin' ){
        this.route.navigate(['escalaDePlantoes/admin/listaDeMedicos']);
      }
      if(localStorage.getItem("roleName") === 'Medico' ){
        this.route.navigate(['escalaDePlantoes/medico']);
      }
      if(localStorage.getItem("roleName") === 'Financeiro' ){
      this.route.navigate(['escalaDePlantoes/financeiro/relatorios']);
      }
    }

    selecionarCor(cor: string){
      this.cor="cor1";
      return this.cor;

    }
    selecionarManha(){
      this.manha =' verde';
      return this.manha;
    }

    selecionarNoite(){
      this.manha =' amarelo';
      return this.manha;
    }

    selecionarTarde(){
      this.manha =' azul';
      return this.manha;
    }
}
