import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../Entities/emp-admin/emp';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class EmpAdminService {

  constructor(private http:HttpClient,
    private baseUrl:BaseURLService) { }

  getAllEmployees() {
    return this.http.get<employee[]>(this.baseUrl.BASE_URL+"/employee-admin");
  }

  getEmployeeById(id) {
    return this.http.get<employee>(this.baseUrl.BASE_URL+`/employee/${id}`);
  }

  addEmployee(employee) {
    return this.http.post(this.baseUrl.BASE_URL+"/employee", employee);
  }

  updateEmployee(employee) {
    return this.http.put(this.baseUrl.BASE_URL+`/employee/${employee.id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl.BASE_URL+`/employee/${id}`);
  }
}
