import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/Entities/emp-admin/emp';
import { EmpAdminService } from 'src/app/service/emp-admin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: employee;
  id: number;
  emailExists:boolean;

  constructor(
    private router: Router,
    private empAdminService: EmpAdminService,
    private path: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.path.snapshot.params['id'];
    this.emailExists=false;
    this.refresh();
  }

  refresh() {
    if (this.id == -1) {
      this.employee = new employee;
    }
    else {
      this.empAdminService.getEmployeeById(this.id).subscribe(
        res => {
          this.employee = res;
          this.employee.password = 'Def@ult1'
        }
      )
    }
  }
  addEmployee() {
    if (this.id == -1) {
      this.empAdminService.addEmployee(this.employee).subscribe(
        res => {
          console.log(this.employee);
          this.router.navigate(['employees']);
        },
        err => {
          this.emailExists=true;
          this.employee.email='';
        }
      )
    }
    else {
      if(this.employee.password == 'Def@ult1')
        this.employee.password = null;
      this.empAdminService.updateEmployee(this.employee).subscribe(
        res => {
          this.router.navigate(['employees']);
        },
        err => {
          this.emailExists=true;
          this.employee.email='';
          this.employee.password = 'Def@ult1'
        }
      )
    }
  }
}