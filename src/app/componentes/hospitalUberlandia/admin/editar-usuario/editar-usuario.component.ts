import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id:number =0;


  constructor(

      private route: ActivatedRoute,
      private router: Router


  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


  }


  salvar(){

  }

  goToClienteList(){
    alert('Usuario Editado Com Sucesso')
    this.router.navigate(['escalaDePlantoes/admin/listaDeMedicos']);
  }

  cancelar(){
    this.router.navigate(['escalaDePlantoes/admin/listaDeMedicos']);
  }

}

