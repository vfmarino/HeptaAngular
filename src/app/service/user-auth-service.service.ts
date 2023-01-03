import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    if (!roles.length) {
      localStorage.removeItem('roles');
      return
    }


    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public clear() {
    localStorage.clear();
  }

}
