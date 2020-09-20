import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { cart_backend } from '../Entities/cart_backend';
import { cart } from '../Entities/dev/cart';
import { inventory } from '../Entities/dev/inventory';
import { pastRequests } from '../Entities/dev/past-requests';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http:HttpClient) { }
  inventories : inventory[];
  cart : cart;

  getInventoryItems() {
    return this.http.get<inventory[]>("http://localhost:8080/get-inventory");
  }

  getInventoryViewItems() {
     return forkJoin([
       this.getInventoryItems(),
       this.http.get<cart_backend>("http://localhost:8080/cart"),
       this.getPastRequests()
     ]).pipe(
       map(([inventory_items, cart_items, requested_items]) => {
         inventory_items.forEach(
           item => {
             item.isAvailable = (item.itemsInStock>0?'Available': 'Not Available');
             item.inCart=false;
             item.sameTypeInCart=false;
             item.requested=false;
             //item.inCart = (cart_items.inventories.findIndex(x => item.name == x.name))>-1?true:false;

             cart_items.inventories.forEach(
               x => {
                if(item.name == x.name)
                  item.inCart = true;
                else if(item.type == x.type.type)
                  item.sameTypeInCart = true;
                else if(item.type == 'Laptop' && x.type.type == 'Desktop')
                  item.sameTypeInCart = true;
                else if(item.type == 'Desktop' && x.type.type == 'Laptop')
                  item.sameTypeInCart = true;
                else if(item.type == 'Docking Port' && x.type.type == 'Desktop')
                  item.sameTypeInCart = true;
                else if(item.type == 'Desktop' && x.type.type == 'Docking Port')
                  item.sameTypeInCart = true;
               }
             )

               requested_items.forEach(
                 request => {
                   request.inventories.forEach(
                     inv => {
                       if(inv.type == item.type)
                        item.requested = true;
                     }
                   )
                 }
               )
           }
         );
         return inventory_items;
       })
     )
    // if(this.cart == null)
    //   this.cart = this.getCart();
    // for(let inventory of this.inventories) {
    //   let temp = this.cart.find(x => x.name == inventory.name)
    //   if(temp != null)
    //     inventory.inCart=true
    // }
    // return this.inventories;
  }

  getCart() {
    return this.http.get<cart>("http://localhost:8080/cart");
    //return this.cart;
  }

  addToCart(inventory) {
    inventory.inCart = true;
    return this.http.post("http://localhost:8080/add-cart", inventory.name);
    //console.log(this.cart.inventories);
  }

  removeFromCart(inventory) {
    inventory.inCart = false;
    return this.http.post("http://localhost:8080/remove-cart", inventory.name);
    //console.log(this.cart.inventories);
  }

  request(remarks) {
    return this.http.post("http://localhost:8080/request", remarks);
  }

  getPastRequests() {
    return this.http.get<pastRequests[]>("http://localhost:8080/past-requests");
  }

  getRequest(id) {
    return this.http.get<pastRequests>(`http://localhost:8080/past-requests/${id}`);
  }
}
