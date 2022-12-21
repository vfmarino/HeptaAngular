import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';

import { ListarDashBoardService } from 'src/app/service/listar-dashboard/lista-dashboard-service';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';
import { AuthService } from '../../../../service/auth-service/auth-service.service';

@Component({
  selector: 'app-aceitar-plantao',
  templateUrl: './aceitar-plantao.component.html',
  styleUrls: ['./aceitar-plantao.component.css']
})
export class AceitarPlantaoComponent implements OnInit {

  plantoes: DashBoardPlantoes[]=[];
  usuario: any;
  userId!: number;
  constructor(

    private listarDashBoardService: ListarDashBoardService,
    private route: Router,
    private trocaDePlantaoService :TrocaDePlantaoService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  aceitar(){}

  getPlantoesByIdUser(userId: number){
    this.authService.getDadosDePlantoes(userId).subscribe(plantoes => {
   // this.dashBoardPlantoes = plantoes;

  });
    }

  getUser(){
   this.authService.getUser().subscribe(user => {
      this.usuario = user;
       this.userId = this.usuario.id_user;
      console.log(this.usuario),
      console.log(this.userId);
       //this.getPlantoesByIdUser(this.userId);
  });

}

cancelar(){
  this.route.navigate(['/escalaDePlantoes/medico/perfil']);
}
}
