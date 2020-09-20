import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { employee } from 'src/app/Entities/employee';

@Injectable({
  providedIn: 'root'
})
export class DevRouteGuardService {
  emp:employee
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.emp = JSON.parse(sessionStorage.getItem('user'));
    if(this.emp.role === "DEVELOPER")
      return true
    else {
      this.router.navigate(['']);
      return false;
    }
  }
  constructor(private router:Router) { }
}
