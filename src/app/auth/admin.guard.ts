import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { IUser } from '../Models/i-user';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

type AccessData = {
  accessToken:string,
  user:IUser
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      const userJson = localStorage.getItem('accessData')
      const accessData:AccessData = JSON.parse(userJson!)
      return this.authSvc.isLoggedIn$.pipe(
        map(isLoggedIn => {
          if (isLoggedIn && accessData.user.role === 'ADMIN') {
            return true;
          } else {
            this.router.navigate(['homepage']);
            return false;
          }
        })
      );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      return this.canActivate(childRoute,state);
  }

}
