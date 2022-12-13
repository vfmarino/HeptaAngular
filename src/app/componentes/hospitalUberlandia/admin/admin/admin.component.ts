import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  financeiro(){
    this.route.navigate(['escalaDePlantoes/financeiro']);
  }
  dashboard(){

    this.route.navigate(['escalaDePlantoes/dashboard']);
  }





}
