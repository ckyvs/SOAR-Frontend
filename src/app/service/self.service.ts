import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { self } from '../Entities/self';

@Injectable({
  providedIn: 'root'
})
export class SelfService {

  constructor(private http:HttpClient) { }

  getSelf() {
    return this.http.get<self>(`http://localhost:8080/api/profile`);
  }

  updateSelf(self) {
    return this.http.post(`http://localhost:8080/api/profile`, self);
  }
}
