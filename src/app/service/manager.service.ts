import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pendingRequests } from '../Entities/manager/pending-requests';
import { respondedRequests } from '../Entities/manager/responded-requests';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  getPendingRequests() {
    return this.http.get<pendingRequests[]>("http://localhost:8080/pending-requests");
  }

  getPendingRequestbyId(id) {
    return this.http.get<pendingRequests>(`http://localhost:8080/pending-requests/${id}`);
  }

  getRespondedRequests() {
    return this.http.get<respondedRequests[]>("http://localhost:8080/responded-requests");
  }

  getRespondedRequestbyId(id) {
    return this.http.get<respondedRequests>(`http://localhost:8080/responded-requests/${id}`);
  }

  respondToRequest(id, response) {
    return this.http.post(`http://localhost:8080/respond/${id}`, response);
  }
}
