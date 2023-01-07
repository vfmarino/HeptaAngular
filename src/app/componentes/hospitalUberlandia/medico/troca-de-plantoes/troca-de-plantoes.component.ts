import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MotivoDeTroca } from 'src/app/modelos/motivo-de-troca/motivo-de-troca.module';

import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';

@Component({
  selector: 'app-troca-de-plantoes',
  templateUrl: './troca-de-plantoes.component.html',
  styleUrls: ['./troca-de-plantoes.component.css']
})
export class TrocaDePlantoesComponent implements OnInit {

  id!: any;
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
    this.dashBoardPlantoes = this.router.snapshot.params['id'];
    let user = localStorage.getItem('userId');
    if (user !== null) {
      this.id = JSON.parse(user).id;

    } else {
      alert("Fazer Login");
      this.route.navigate(['/escalaDePlantoes/login']);
    }
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
    let user = localStorage.getItem('userId');
    if (user !== null) {

      let id = JSON.parse(user).id;
      this.motivoDeTroca.userID = 4;
      console.log(this.motivoDeTroca.userID);
      this.motivoDeTroca.dataDaSolicitacao = new Date();
      console.log(this.motivoDeTroca.dataDaSolicitacao);
      this.motivoDeTroca.plantaoID = this.id;
      this.motivoDeTroca.motivo = this.motivo;
      console.log(this.motivoDeTroca);
      this.criarMotivoDeTrocaDePlantao();

    } else {
      this.route.navigate(['/escalaDePlantoes/login']);
      return alert('Usuário não autenticado');
    }
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
