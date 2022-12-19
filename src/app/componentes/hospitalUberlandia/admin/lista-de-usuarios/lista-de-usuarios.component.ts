import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuario-modelo/usuario-modelo.module';
import { ListarUsuariosService } from 'src/app/service/listar-usuarios/listar-usuarios.service';
import { Role } from 'src/app/modelos/Role/Role.module';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css']
})
export class ListaDeUsuariosComponent implements OnInit {

  usuarios: Usuarios[] = [];
  profissoes: Role[]=[];

      constructor(
        private listarUsuariosService: ListarUsuariosService,

      ) { }

      ngOnInit(): void {
       this.listarUsuarios();

      }

      listarUsuarios(){
        this.listarUsuariosService.getUsuarioList().subscribe(response =>this.usuarios = response);

      }
}
