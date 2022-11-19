import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { storeRoute } from '../../../core/routes';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts = this.cartService.getItems();
  storeRoute = storeRoute;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.carts = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
