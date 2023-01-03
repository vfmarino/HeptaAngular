import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';
import { UserAuthService } from 'src/app/service/user-auth-service.service';
import { NgForm } from '@angular/forms';
import { Role } from '../../../modelos/Role/Role.module';
import { Token } from '@angular/compiler';

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

       localStorage.setItem("userId", JSON.stringify(response.user));
       localStorage.setItem("token", response.token);
        console.log(response);

       const role = response.user.role.id

        if (role === 1) {
          this.router.navigate(['/escalaDePlantoes/admin']);
        } else if(role === 2) {
          this.router.navigate(['/escalaDePlantoes/medico/perfil']);
        } else if( role === 3){
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


