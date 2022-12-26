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
  selecionado: boolean = false;
  cor!: string;
  setor!: string;

  dataInicial: Date = new Date()
  dataFinal: Date = new Date();

  constructor(
        private listarDashBoardService: ListarDashBoardService,
    private route: Router

  ) {}

  ngOnInit(): void {
    console.log(this.dataFinal);
    this.dataInicial= new Date();
    this.getDashboradPlantoes();


  }

  calcular(){
    console.log(this.dataFinal);
    this.getDashboradPlantoes();
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
    Selecionado() {
      if (this.setor != '') {
        this.selecionado = true;
      } else {
        this.selecionado = false;
      }
    }

}
