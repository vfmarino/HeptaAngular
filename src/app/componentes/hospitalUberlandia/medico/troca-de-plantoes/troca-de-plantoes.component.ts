import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashBoardPlantoes } from 'src/app/modelos/dash-board/dash-board.module';
import { MotivoDeTroca } from 'src/app/modelos/motivo-de-troca/motivo-de-troca.module';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';

@Component({
  selector: 'app-troca-de-plantoes',
  templateUrl: './troca-de-plantoes.component.html',
  styleUrls: ['./troca-de-plantoes.component.css']
})
export class TrocaDePlantoesComponent implements OnInit {

  id!: number;
  dashBoardPlantoes: any;
  selecionado: boolean = false;
  motivo: String = '';
  motivoDeTroca = new MotivoDeTroca();

  constructor(
    private router: ActivatedRoute,
    private trocaDePlantaoService: TrocaDePlantaoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

  }

  Selecionado() {
    if (this.motivo != '') {
      this.selecionado = true;
    } else {
      this.selecionado = false;
    }
  }

  aceitar() {
    this.createMotivo();
    this.updatePlantaoById();
  }

  updatePlantaoById() {
    this.trocaDePlantaoService.updatePlantaoByID(this.id, this.dashBoardPlantoes).subscribe(
      {
        next: data => {
          this.cancelar();
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }

  createMotivo() {
    this.motivoDeTroca.idDoUsuario = localStorage.getItem("userId");
    console.log(this.motivoDeTroca.idDoUsuario);
    this.motivoDeTroca.data = new Date();
    console.log(this.motivoDeTroca.data);
    this.motivoDeTroca.idDoPlantao = this.id;
    this.motivoDeTroca.motivo = this.motivo;
    console.log(this.motivoDeTroca);
    //this.criarMotivoDeTrocaDePlantao();

  }

  criarMotivoDeTrocaDePlantao() {
    this.trocaDePlantaoService.criarMotivoDeTrocaDePlantao(this.motivoDeTroca).subscribe(
      {
        next: data => {
          this.cancelar();
        },
        error: error => {
          console.log(error);
        }
      }
    )
  }

  cancelar() {
    this.route.navigate(['/escalaDePlantoes/medico/perfil']);
  }

}
