import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'cart',
  templateUrl: './cart.html'
})
export class CartComponent {

  cart: Dvd[];
  constructor(private dvdService: DvdService) {

    this.cart = this.dvdService.cart;

  }

  // remove from cart
  remove(dvdId) {
    this.dvdService.removeFromCart(dvdId);
  }

  getTotal() {
    return this.cart.length * 1.5
  }

}
