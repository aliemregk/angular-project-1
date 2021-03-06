import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.authService.admin) {
      return true;
    } else {
      localStorage.clear;
      this.router.navigate(["login"]);
      this.toastrService.info("You must be admin to continue. Please log in as admin.");
      return false;
    }
  }
}
