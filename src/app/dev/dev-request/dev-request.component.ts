import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pastRequests } from 'src/app/Entities/dev/past-requests';
import { DevService } from 'src/app/service/dev.service';

@Component({
  selector: 'app-dev-request',
  templateUrl: './dev-request.component.html',
  styleUrls: ['./dev-request.component.css']
})
export class DevRequestComponent implements OnInit {

  request:pastRequests;
  id:number;
  constructor(private devService:DevService,
    private path:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.path.snapshot.params['id'];
    this.devService.getRequest(this.id).subscribe(
      res => {
        this.request = res;
      }
    )
  }

  back() {
    this.router.navigate(['past-requests'])
  }
}
