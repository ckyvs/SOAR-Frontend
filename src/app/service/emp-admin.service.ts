import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../Entities/emp-admin/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpAdminService {

  constructor(private http:HttpClient) { }

  getAllEmployees() {
    return this.http.get<employee[]>("http://localhost:8080/employee-admin");
  }

  getEmployeeById(id) {
    return this.http.get<employee>(`http://localhost:8080/employee/${id}`);
  }

  addEmployee(employee) {
    return this.http.post("http://localhost:8080/employee", employee);
  }

  updateEmployee(employee) {
    return this.http.put(`http://localhost:8080/employee/${employee.id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(`http://localhost:8080/employee/${id}`);
  }
}
