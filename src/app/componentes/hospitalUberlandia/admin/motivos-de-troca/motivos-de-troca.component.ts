import { Component, OnInit } from '@angular/core';
import { MotivoDeTroca } from 'src/app/modelos/motivo-de-troca/motivo-de-troca.module';
import { MotivosTrocaService } from 'src/app/service/motivosTroca/motivos-troca.service';

@Component({
  selector: 'app-motivos-de-troca',
  templateUrl: './motivos-de-troca.component.html',
  styleUrls: ['./motivos-de-troca.component.css']
})
export class MotivosDeTrocaComponent implements OnInit {

  motivos: MotivoDeTroca[]=[];

  constructor(
    private motivosTrocaService :MotivosTrocaService

  ) { }

  ngOnInit(): void {
    this.getMotivos();
  }

  private getMotivos(){
    this.motivosTrocaService.getMotivos().subscribe(response =>this.motivos = response);
  }
}
