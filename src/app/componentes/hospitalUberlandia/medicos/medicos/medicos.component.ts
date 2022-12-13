import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  constructor(
    private route:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  problemas(){
    this.route.navigate(['escalaDePlantoes/medicos/problemas'])
  }

  dashboard(){
    this.route.navigate(['escalaDePlantoes/dashboard'])
  }


}
