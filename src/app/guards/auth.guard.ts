import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthGuardService} from '../services/auth-guard/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authGuardService: AuthGuardService,
    private router: Router
  ) {
  }
  canActivate (): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authGuardService.getToken()) {
      // console.log('No token');
      this.router.navigateByUrl('/login');
    } else {
      // console.log('Token Exists');
      return true;
    }
  }
}
