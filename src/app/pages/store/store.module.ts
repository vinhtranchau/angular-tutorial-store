import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShippingPricesComponent } from './shipping-prices/shipping-prices.component';
import { ProductComponent } from './product/product.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';


@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    ProductDetailComponent,
    ShippingPricesComponent,
    ProductComponent,
    ProductAlertComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
