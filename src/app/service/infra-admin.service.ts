import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventory } from '../Entities/infra-admin/inventory';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class InfraAdminService {

  constructor(
    private http:HttpClient,
    private baseUrl:BaseURLService
  ) { }

  getAllInventories() {
    return this.http.get<inventory[]>(this.baseUrl.BASE_URL+"/infra-admin");
  }

  getInventoryById(id) {
    return this.http.get<inventory>(this.baseUrl.BASE_URL+`/inventory/${id}`);
  }

  addInventory(inventory) {
    return this.http.post(this.baseUrl.BASE_URL+"/add-inventory", inventory);
  }

  updateInventory(inventory) {
    return this.http.put(this.baseUrl.BASE_URL+`/update-inventory/${inventory.id}`, inventory);
  }
}
