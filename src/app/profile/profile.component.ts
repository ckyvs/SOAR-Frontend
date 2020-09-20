import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { self } from '../Entities/self';
import { SelfService } from '../service/self.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  self: self;

  constructor(
    private router: Router,
    private selfService: SelfService
  ) { }

  ngOnInit(): void {
    this.selfService.getSelf().subscribe(
      res => {
        this.self = res;
        this.self.password = 'Def@ult1'
      }
    )
  }
  updateSelf() {
    if (this.self.password == 'Def@ult1')
      this.self.password = null;
    this.selfService.updateSelf(this.self).subscribe(
      res => {
        this.router.navigate(['']);
      }
    )
  }
}
