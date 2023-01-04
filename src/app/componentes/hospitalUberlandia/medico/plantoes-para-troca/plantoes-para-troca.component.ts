import { Component, OnInit } from '@angular/core';
import { Plantao } from 'src/app/modelos/dash-board/dash-board.module';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantoes-para-troca',
  templateUrl: './plantoes-para-troca.component.html',
  styleUrls: ['./plantoes-para-troca.component.css']
})
export class PlantoesParaTrocaComponent implements OnInit {

  plantoes: Plantao[]=[];
  plantao: any;
  dashBoardPlantoes : Plantao[]=[];

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
