import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/app/Entities/dev/cart';
import { inventory } from 'src/app/Entities/dev/inventory';
import { DevService } from 'src/app/service/dev.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: cart;
  cartCame: boolean;
  remarks:string;
  constructor(private devService: DevService,
    private router:Router) { }

  ngOnInit(): void {
    this.remarks='';
    this.refresh();
  }

  refresh() {
    this.devService.getCart().subscribe(
      res => {
        this.cart = res;
        this.cartCame = true;
        console.log(res);
      }
    );
  }
  remove(inventory) {
    this.devService.removeFromCart(inventory).subscribe(
      res => {
        console.log(this.cart);
        inventory.inCart = false
        this.refresh();
      }
    );
  }

  request() {
    this.devService.request(this.remarks).subscribe(
      res =>{
        this.router.navigate(['inventory']);
      }
    );
  }
}
