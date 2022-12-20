import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-troca-de-plantoes',
  templateUrl: './troca-de-plantoes.component.html',
  styleUrls: ['./troca-de-plantoes.component.css']
})
export class TrocaDePlantoesComponent implements OnInit {

  id:number =0;
  userId:number =-1;
  plantao : DashBoardPlantoes=new DashBoardPlantoes();
  usuario: any;

  constructor(
    private router: ActivatedRoute,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    //this.getUser();
    this.id = this.router.snapshot.params['id'];

  }
  getDadosDePlantoesById(){
    this.authService.updateDadosDePlantoesById(this.id, this.plantao).subscribe(  {
      next: data =>{
      this.goToPerfil();
      },
      error: error => {
        console.log(error);
      }
    }
  )}

  getUser(){
    this.authService.getUser().subscribe(user => {
      this.usuario = user;
      this.userId = this.usuario.id_user;


    });

}

  aceitar(){
   this.getUser();
   this.getDadosDePlantoesById();
  }

  cancelar(){
    this.route.navigate(['/escalaDePlantoes/medico/perfil']);
  }
  goToPerfil(){
    this.route.navigate(['medicos/perfil']);
  }
}
