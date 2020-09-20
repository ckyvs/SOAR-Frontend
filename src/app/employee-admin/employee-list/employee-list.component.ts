import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/Entities/emp-admin/emp';
import { EmpAdminService } from 'src/app/service/emp-admin.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:employee[];
  deleted:boolean
  constructor(private empAdminService:EmpAdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.empAdminService.getAllEmployees().subscribe(
      res => {
        this.employees=res;
        this.deleted=false;
      }
    )
  }
  refresh() {
    this.empAdminService.getAllEmployees().subscribe(
      res => {
        this.employees=res;
        this.deleted=true;
      }
    )
  }

  addEmployee() {
    this.router.navigate(['employees/'+-1])
  }

  self(email) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    return email == user.email;
  }

  view(id) {
    this.router.navigate([`/employees/${id}`]);
  }
  delete(id) {
    this.empAdminService.deleteEmployee(id).subscribe(
      res => {
        this.refresh();
      }
    )
  }

}
