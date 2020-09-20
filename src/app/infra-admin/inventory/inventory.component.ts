import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { inventory } from 'src/app/Entities/infra-admin/inventory';
import { InfraAdminService } from 'src/app/service/infra-admin.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory:inventory;
  id:number;
  
  constructor(
    private router: Router,
    private infraAdminService: InfraAdminService,
    private path: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.path.snapshot.params['id'];
    if (this.id == -1) {
      this.inventory = new inventory;
    }
    else {
      this.infraAdminService.getInventoryById(this.id).subscribe(
        res => {
          this.inventory = res;
        }
      )
    }
  }

  imageSelected(event){
    this.inventory.image = event.target.files[0];
  }
  addInventory() {
    if (this.id == -1) {
      this.infraAdminService.addInventory(this.inventory).subscribe(
        res => {
          console.log(this.inventory);
          // this.router.navigate(['inventories']);
        }
      )
    }
    else {
      this.infraAdminService.updateInventory(this.inventory).subscribe(
        res => {
          this.router.navigate(['inventories']);
        }
      )
    }
  }

}
