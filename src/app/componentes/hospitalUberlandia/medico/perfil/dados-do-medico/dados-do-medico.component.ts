import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';
import { AuthService } from '../../../../../service/auth-service/auth-service.service';

@Component({
  selector: 'app-dados-do-medico',
  templateUrl: './dados-do-medico.component.html',
  styleUrls: ['./dados-do-medico.component.css']
})
export class DadosDoMedicoComponent implements OnInit {

usuario: any;

constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUser();

    }


    getUser(){
      this.authService.getUser().subscribe(user => {

        this.usuario = user;
      });
}
}
