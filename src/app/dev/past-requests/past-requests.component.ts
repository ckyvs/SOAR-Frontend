import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pastRequests } from 'src/app/Entities/dev/past-requests';
import { DevService } from 'src/app/service/dev.service';

@Component({
  selector: 'app-past-requests',
  templateUrl: './past-requests.component.html',
  styleUrls: ['./past-requests.component.css']
})
export class PastRequestsComponent implements OnInit {

  pastRequests:pastRequests[];
  constructor(private devService:DevService,
    private router:Router) { }

  ngOnInit(): void {
    this.devService.getPastRequests().subscribe(
      (res) => {
        this.pastRequests = res;
        console.log(res);
      }
    )
  }
  view(request) {
    this.router.navigate([`past-request/${request.id}`]);
  }

}
