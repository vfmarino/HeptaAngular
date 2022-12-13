import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate{

  constructor(
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | boolean {

        return false;
      }
}
