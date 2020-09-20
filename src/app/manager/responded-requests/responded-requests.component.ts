import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { respondedRequests } from 'src/app/Entities/manager/responded-requests';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-responded-requests',
  templateUrl: './responded-requests.component.html',
  styleUrls: ['./responded-requests.component.css']
})
export class RespondedRequestsComponent implements OnInit {

  pastRequests:respondedRequests[];
  constructor(private managerService:ManagerService,
    private router:Router) { }

  ngOnInit(): void {
    this.managerService.getRespondedRequests().subscribe(
      res => {
        this.pastRequests=res;
        console.log(res);
      }
    )
  }

  view(request){
    this.router.navigate([`responded-request/${request.id}`])
  }

}
