import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-headerh1',
  templateUrl: './headerh1.component.html',
  styleUrls: ['./headerh1.component.css']
})
export class Headerh1Component implements OnInit {

  mostrarHeader: boolean =true;

  constructor(
    private authService:AuthService,
    private route: Router

    ) { }

  ngOnInit(): void {
      this.verificarlogin();
  }


  login(){
    this.route.navigate(['escalaDePlantoes/login']);

  }


  private verificarlogin(){
    if(localStorage.getItem("token") != null ){
      this.mostrarHeader = false;
    }
    this.mostrarHeader = true;
  }
}
