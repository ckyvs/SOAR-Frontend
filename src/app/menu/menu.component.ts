import { Component, OnInit } from '@angular/core';
import { employee } from '../Entities/employee';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  emp:employee
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') != null) {
      this.emp = JSON.parse(sessionStorage.getItem('user'));
    }
  }
}
