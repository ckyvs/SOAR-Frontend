import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { self } from '../Entities/self';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class SelfService {

  constructor(private http:HttpClient,
    private baseUrl:BaseURLService) { }

  getSelf() {
    return this.http.get<self>(this.baseUrl.BASE_URL+`/profile`);
  }

  updateSelf(self) {
    return this.http.post(this.baseUrl.BASE_URL+`/profile`, self);
  }
}
