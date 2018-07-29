import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './demos/shared/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operator/map';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.loggedIn
      .map((isLoggedIn) => {
        if(!isLoggedIn) {
          this.router.navigate(['/login']);
        }
        return isLoggedIn;
      });
  }
}
