import { Component, OnInit } from '@angular/core';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantoes-para-troca',
  templateUrl: './plantoes-para-troca.component.html',
  styleUrls: ['./plantoes-para-troca.component.css']
})
export class PlantoesParaTrocaComponent implements OnInit {

  plantoes: DashBoardPlantoes[]=[];
  plantao: any;
  dashBoardPlantoes : DashBoardPlantoes[]=[];

  constructor(
    private trocaDePlantaoService:TrocaDePlantaoService,
    private route : Router

  ) { }

  ngOnInit(): void {
    this.getListarPlantoesEmTroca();
  }

  getListarPlantoesEmTroca(){
    this.trocaDePlantaoService.ListarPlantoesEmTroca().subscribe(plantao => {
      this.dashBoardPlantoes = plantao;

    });
  }

  aceitar(id:number){
    this.route.navigate(['escalaDePlantoes/medico/aceitar', id]);
  }
}
