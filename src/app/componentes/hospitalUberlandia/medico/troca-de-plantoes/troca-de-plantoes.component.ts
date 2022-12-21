import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';

@Component({
  selector: 'app-troca-de-plantoes',
  templateUrl: './troca-de-plantoes.component.html',
  styleUrls: ['./troca-de-plantoes.component.css']
})
export class TrocaDePlantoesComponent implements OnInit {

  id!:number ;

  dashBoardPlantoes: any;


  constructor(
    private router: ActivatedRoute,
    private trocaDePlantaoService: TrocaDePlantaoService,
    private route: Router
  ) { }

  ngOnInit(): void {
     this.id = this.router.snapshot.params['id'];

  }

  aceitar(){
    this.getPlantaoById(this.id);
    this.updatePlantaoById();
  }

  getPlantaoById(id: number){
    this.trocaDePlantaoService.getPlantaoById(id).subscribe(plantao => {
      console.log(plantao);

      this.dashBoardPlantoes = plantao;
      console.log(this.dashBoardPlantoes);
    });
  }

  updatePlantaoById(){
    this.trocaDePlantaoService.updatePlantaoByID(this.id, this.dashBoardPlantoes).subscribe(
      {
        next: data =>{
        this.goToPerfil();
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }







  cancelar(){
    this.route.navigate(['/escalaDePlantoes/medico/perfil']);
  }
  goToPerfil(){
    this.route.navigate(['medicos/perfil']);
  }
}
