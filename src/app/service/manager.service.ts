import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pendingRequests } from '../Entities/manager/pending-requests';
import { respondedRequests } from '../Entities/manager/responded-requests';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient,
    private baseUrl:BaseURLService) { }

  getPendingRequests() {
    return this.http.get<pendingRequests[]>(this.baseUrl.BASE_URL+"/pending-requests");
  }

  getPendingRequestbyId(id) {
    return this.http.get<pendingRequests>(this.baseUrl.BASE_URL+`/pending-requests/${id}`);
  }

  getRespondedRequests() {
    return this.http.get<respondedRequests[]>(this.baseUrl.BASE_URL+"/responded-requests");
  }

  getRespondedRequestbyId(id) {
    return this.http.get<respondedRequests>(this.baseUrl.BASE_URL+`/responded-requests/${id}`);
  }

  respondToRequest(id, response) {
    return this.http.post(this.baseUrl.BASE_URL+`/respond/${id}`, response);
  }
}
