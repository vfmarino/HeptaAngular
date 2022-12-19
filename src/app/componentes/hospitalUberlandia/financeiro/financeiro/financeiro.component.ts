import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';
import { UserAuthService } from 'src/app/service/user-auth-service.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private route:Router,
    private userAuthService:UserAuthService
  ) { }

  ngOnInit(): void {
  }

  dashboard(){

    this.route.navigate(['escalaDePlantoes/dashboard']);
  }

  logout(){
      this.userAuthService.setRoles([]);
      this.userAuthService.setToken("");
      this.route.navigate(['escalaDePlantoes/login']);
  }


}
