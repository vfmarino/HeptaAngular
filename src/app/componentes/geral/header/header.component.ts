import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private authService:AuthService,
    private route: Router

    ) { }

  ngOnInit(): void {

  }


  areaDoCLiente(){
    this.route.navigate(['hospitalUberlandia']);

  }

}
