import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth-service.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  constructor(
    private route:Router,
    private userAuthService:UserAuthService
  ) { }

  ngOnInit(): void {

  }

  trocas(){
    this.route.navigate(['escalaDePlantoes/medico/trocas']);
  }

  dashboard(){
    this.route.navigate(['escalaDePlantoes/dashboard']);
  }

  perfil(){
    this.route.navigate(['escalaDePlantoes/medico/perfil']);
  }

  logout(){
    this.userAuthService.setRoles([]);
    this.userAuthService.setToken("");
    this.route.navigate(['escalaDePlantoes/login']);
}
}
