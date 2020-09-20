import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/Entities/dev/cart';
import { inventory } from 'src/app/Entities/dev/inventory';
import { DevService } from 'src/app/service/dev.service';

@Component({
  selector: 'app-inventory-request',
  templateUrl: './inventory-request.component.html',
  styleUrls: ['./inventory-request.component.css']
})
export class InventoryRequestComponent implements OnInit {

  inventories:inventory[];
  cart:cart;
  constructor(private devService:DevService) { }

  ngOnInit(): void {
    this.devService.getInventoryViewItems().subscribe(
      (res)=>{
        this.inventories = res;
        console.log(res);
      }
    );
    this.devService.getCart().subscribe(
      (res) => {
        this.cart = res;
        console.log(this.cart);
      }
    );
  }
  refreshPage() {
    this.devService.getInventoryViewItems().subscribe(
      (res)=>{
        this.inventories = res;
        console.log(res);
      }
    );
    this.devService.getCart().subscribe(
      (res) => {
        this.cart = res;
        console.log(this.cart);
      }
    );
  }
  add(inventory) {
    this.devService.addToCart(inventory).subscribe(
      res => {
        this.refreshPage();
      }
    );
    inventory.inCart = true
  }
  remove(inventory) {
    this.devService.removeFromCart(inventory).subscribe(
      (res) => {
        this.refreshPage();
      }
    );
    console.log(this.cart);
    inventory.inCart = false
  }
  available(items) {
    if(items > 0)
      return 'Add to Cart'
    return 'Not Available'
  }
}
