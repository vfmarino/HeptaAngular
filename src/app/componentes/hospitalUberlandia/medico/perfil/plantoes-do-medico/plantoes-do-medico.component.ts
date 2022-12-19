import { Component, OnInit } from '@angular/core';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-plantoes-do-medico',
  templateUrl: './plantoes-do-medico.component.html',
  styleUrls: ['./plantoes-do-medico.component.css']
})
export class PlantoesDoMedicoComponent implements OnInit {

  dashBoardPlantoes : DashBoardPlantoes[]=[];
  usuario: any;
  userID:any;

  constructor(
   private authService: AuthService
  ) { }

    ngOnInit(): void {
      this.getUser();


    }

    getPlantoesById(){
      this.authService.getDadosDePlantoes(this.userID).subscribe(plantoes => {
        this.dashBoardPlantoes = plantoes;
        console.log(this.dashBoardPlantoes);
      });
        }

    getUser(){
      this.authService.getUser().subscribe(user => {
        this.usuario = user;
        this.userID = this.usuario.id_user;
        this.getPlantoesById();
      });

    }

}
