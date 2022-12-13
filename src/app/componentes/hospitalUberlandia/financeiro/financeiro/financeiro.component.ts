import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private route:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.route.navigate(['../../dashboard'])
  }


}
