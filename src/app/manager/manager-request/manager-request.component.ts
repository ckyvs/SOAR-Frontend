import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pendingRequests } from 'src/app/Entities/manager/pending-requests';
import { managerResponse } from 'src/app/Entities/manager/response';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-manager-request',
  templateUrl: './manager-request.component.html',
  styleUrls: ['./manager-request.component.css']
})
export class ManagerRequestComponent implements OnInit {

  id:number;
  request:pendingRequests;
  remarks:string;
  response:managerResponse;
  constructor(private router:Router,
    private managerService:ManagerService,
    private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.path.snapshot.params['id'];
    this.managerService.getPendingRequestbyId(this.id).subscribe(
      res =>
        {
          this.request = res;
          console.log(res);
        }
    )
  }
  back() {
    this.router.navigate(['pending-requests']);
  }
  approve(id){
    this.response = new managerResponse('APPROVED', this.remarks)
    this.managerService.respondToRequest(id, this.response).subscribe(
      (res) => {
        this.router.navigate(['pending-requests']);
      }
    )
  }
  reject(id){
    this.response = new managerResponse('REJECTED', this.remarks)
    this.managerService.respondToRequest(id, this.response).subscribe(
      (res) => {
        this.router.navigate(['pending-requests']);
      }
    )
  }
}
