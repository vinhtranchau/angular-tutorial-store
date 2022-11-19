import { Component, OnInit } from '@angular/core';

import { products } from './products';

@Component({
  selector: 'my-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
