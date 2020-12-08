import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  constructor() {
  }

  login(): void {
    this.isAuth = true;
  }

  logout(): void {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 500);
    });
  }
}
