import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrocaDePlantaoService } from 'src/app/service/trocaDePlantao/troca-de-plantao.service';
import { AuthService } from '../../../../service/auth-service/auth-service.service';

@Component({
  selector: 'app-aceitar-plantao',
  templateUrl: './aceitar-plantao.component.html',
  styleUrls: ['./aceitar-plantao.component.css']
})
export class AceitarPlantaoComponent implements OnInit {

  id!: number;
  user!: any;
  dashBoardPlantoes: any;
  usuario: any;

  constructor(
    private router: ActivatedRoute,
    private trocaDePlantaoService: TrocaDePlantaoService,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

  }

  aceitar() {
    this.getPlantaoById(this.id);
    this.getUser();
    this.aceitarPlantaoById();
  }

  getPlantaoById(id: number) {
    this.trocaDePlantaoService.getPlantaoById(id).subscribe(plantao => {
      this.dashBoardPlantoes = plantao;

    });
  }

  getUser() {
    this.user = localStorage.getItem("userId");

  }

  aceitarPlantaoById() {
    console.log(this.user);
    console.log(this.id);
    this.trocaDePlantaoService.aceitarPlantaoByID(this.id, this.user).subscribe(
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
