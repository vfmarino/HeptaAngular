import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';
import { UserAuthService } from 'src/app/service/user-auth-service.service';
import { NgForm } from '@angular/forms';
import { Role } from '../../../modelos/Role/Role.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userROle:String[] =[];

  id!:number;

  constructor(
    private AuthService: AuthService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.AuthService.login(loginForm.value).subscribe(
      {
       next : (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        localStorage.setItem("userId", response.user.id_user);

        localStorage.setItem("roleName", response.user.role[0].roleName);
       const role = response.user.role[0].roleName;

        if (role === 'Admin') {
          this.router.navigate(['/escalaDePlantoes/admin']);
        } else if(role === 'Medico') {
          this.router.navigate(['/escalaDePlantoes/medico/perfil']);
        } else if( role === 'Financeiro'){
          this.router.navigate(['/escalaDePlantoes/financeiro']);
        } else {
          alert(" Operação não Encontrada, verificar ou entrar em contato com o Administrador")
        }
      },
      error: error => {
        console.log(error);
      }
  });
  }
  voltar(){
    this.router.navigate(['hospitalUberlandia']);

  }
}


