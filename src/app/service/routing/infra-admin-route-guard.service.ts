import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { employee } from 'src/app/Entities/employee';


@Injectable({
  providedIn: 'root'
})
export class InfraAdminRouteGuardService {
  emp:employee;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.emp = JSON.parse(sessionStorage.getItem('user'));
    if(this.emp.role === 'INFRA_ADMIN')
      return true
    else {
      this.router.navigate(['']);
      return false;
    }
  }
  constructor(private router:Router) { }
}
