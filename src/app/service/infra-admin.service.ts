import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventory } from '../Entities/infra-admin/inventory';

@Injectable({
  providedIn: 'root'
})
export class InfraAdminService {

  constructor(
    private http:HttpClient
  ) { }

  getAllInventories() {
    return this.http.get<inventory[]>("http://localhost:8080/api/infra-admin");
  }

  getInventoryById(id) {
    return this.http.get<inventory>(`http://localhost:8080/api/inventory/${id}`);
  }

  addInventory(inventory) {
    return this.http.post("http://localhost:8080/api/add-inventory", inventory);
  }

  updateInventory(inventory) {
    return this.http.put(`http://localhost:8080/api/update-inventory/${inventory.id}`, inventory);
  }
}
