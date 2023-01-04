import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plantao } from 'src/app/modelos/dash-board/dash-board.module';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-plantoes-do-medico',
  templateUrl: './plantoes-do-medico.component.html',
  styleUrls: ['./plantoes-do-medico.component.css']
})
export class PlantoesDoMedicoComponent implements OnInit {

  dashBoardPlantoes : Plantao[]=[];
  usuario: any;
  userID:number =-1;
  userId:number =-1;
  constructor(

   private authService: AuthService,
   private route: Router

   ) { }

    ngOnInit(): void {
      this.getUser();


    }

    getPlantoesByIdUser(userId: number){
        this.authService.getDadosDePlantoes(userId).subscribe(plantoes => {
          this.dashBoardPlantoes = plantoes;

        });
        }

    getUser(){
      this.authService.getUser().subscribe(user => {
        this.usuario = user;
        this.userId = this.usuario.id_user;
        this.getPlantoesByIdUser(this.userId);
      });

    }

    trocar(id:number){
      this.route.navigate(['escalaDePlantoes/medico/trocas', id]);
    }

}
