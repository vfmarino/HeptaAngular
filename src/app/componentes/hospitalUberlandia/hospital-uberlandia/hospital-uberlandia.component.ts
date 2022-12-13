import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-uberlandia',
  templateUrl: './hospital-uberlandia.component.html',
  styleUrls: ['./hospital-uberlandia.component.css']
})
export class HospitalUberlandiaComponent implements OnInit {

  constructor(private route :Router) {

  }

  ngOnInit(): void {
  }

  plantoes(){
    this.route.navigate(['/escalaDePlantoes/login']);
  }
  voltar(){
    this.route.navigate(['/home'])
  }
}
