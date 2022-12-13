import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private route : Router

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | boolean {

      return false;

  }
}
