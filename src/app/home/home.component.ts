import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../Entities/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emp:employee
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') != null) {
      this.emp = JSON.parse(sessionStorage.getItem('user'));
      if(this.emp.role == "DEVELOPER")
        this.router.navigate(['inventory']);
      else if(this.emp.role == "MANAGER")
      this.router.navigate(['pending-requests']);
      else if(this.emp.role == "EMPLOYEE_ADMIN")
      this.router.navigate(['employees']);
      else if(this.emp.role == "INFRA_ADMIN")
      this.router.navigate(['inventories']);
    }
    else {
      this.router.navigate(['login']);
    }
  }

}
