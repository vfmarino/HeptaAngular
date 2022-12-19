import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';

import { ListarUsuariosService } from '../../../../service/listar-usuarios/listar-usuarios.service';
import { Role } from 'src/app/modelos/Role/Role.module';
import { ContaBancaria } from '../../../../modelos/conta-bancaria/conta-bancaria.module';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

profi :Role[]=[];
usuario : Usuarios = new Usuarios();
conta: ContaBancaria = new ContaBancaria();
admin : number = 1;
medico : number = 2;



constructor(

    private listarUsuarioService: ListarUsuariosService,
    private route: Router
)

{}

ngOnInit(): void {

}

cadastrar(){
    console.log(this.usuario);
    this.usuario.conta_bancariaid=12;
    this.usuario.hospitaisid=1;
    this.conta.cpf = this.usuario.cpf;

    console.log(this.usuario);
    console.log(this.conta);

    this.listarUsuarioService.registrarUsuario(this.usuario).subscribe(

      {
        next: res =>{
      if(res== null) {
        alert("Registro Falhou");
        this.ngOnInit();
      } else {
        alert("Registado Com Sucesso");

      }
    },

      error: err =>{
        alert("Cadastro Falhou");
        this.ngOnInit();

      }
    });
 }

voltar(){
    this.route.navigate(['escalaDePlantoes/admin/listaDeMedicos']);
  }
}
