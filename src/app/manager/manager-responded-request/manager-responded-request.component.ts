import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { respondedRequests } from 'src/app/Entities/manager/responded-requests';
import { managerResponse } from 'src/app/Entities/manager/response';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-manager-responded-request',
  templateUrl: './manager-responded-request.component.html',
  styleUrls: ['./manager-responded-request.component.css']
})
export class ManagerRespondedRequestComponent implements OnInit {
  id:number;
  request:respondedRequests;
  remarks:string;
  response:managerResponse;
  constructor(private router:Router,
    private managerService:ManagerService,
    private path:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.path.snapshot.params['id'];
    this.managerService.getRespondedRequestbyId(this.id).subscribe(
      res =>
        {
          this.request = res;
          console.log(res);
        }
    )
  }
  back() {
    this.router.navigate(['responded-requests']);
  }

}
