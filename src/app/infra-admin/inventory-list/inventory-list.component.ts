import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inventory } from 'src/app/Entities/infra-admin/inventory';
import { InfraAdminService } from 'src/app/service/infra-admin.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventories:inventory[];
  deleted:boolean
  constructor(private infraAdminService:InfraAdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.infraAdminService.getAllInventories().subscribe(
      res => {
        this.inventories=res;
      }
    )
  }

  addinventory() {
    this.router.navigate(['inventories/'+-1])
  }

  view(id) {
    this.router.navigate([`inventories/${id}`]);
  }
}
