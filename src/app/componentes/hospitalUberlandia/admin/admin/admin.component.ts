import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route:Router,
    private userAuthService:UserAuthService
    ) { }

  ngOnInit(): void {
  }

  financeiro(){
    this.route.navigate(['escalaDePlantoes/financeiro']);
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
