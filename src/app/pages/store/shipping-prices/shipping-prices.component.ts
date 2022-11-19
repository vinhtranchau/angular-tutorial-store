import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'my-shipping-prices',
  templateUrl: './shipping-prices.component.html',
  styleUrls: ['./shipping-prices.component.scss']
})
export class ShippingPricesComponent implements OnInit {

  prices: Observable<{ type: string, price: number }[]> = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
