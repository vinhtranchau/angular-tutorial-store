import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { storeRoute } from '../../../core/routes';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  storeRoute = storeRoute;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(event: string) {
    window.alert(`You will be notified when the product ${event} goes on sale`);
  }
}
