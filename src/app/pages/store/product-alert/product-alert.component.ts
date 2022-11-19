import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'my-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent {
  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<string> = new EventEmitter();

  constructor() { }

}
