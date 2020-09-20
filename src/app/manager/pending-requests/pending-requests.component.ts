import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pendingRequests } from 'src/app/Entities/manager/pending-requests';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  pendingRequests:pendingRequests[];
  constructor(private managerService:ManagerService,
    private router:Router) { }

  ngOnInit(): void {
    this.managerService.getPendingRequests().subscribe(
      res => {
        this.pendingRequests = res;
        console.log(res);
      }
    )
  }

  view(request){
    this.router.navigate([`pending-request/${request.id}`])
  }
}
