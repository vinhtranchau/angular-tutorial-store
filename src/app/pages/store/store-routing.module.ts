import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { storeRoute } from '../../core/routes';
import { StoreComponent } from './store.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShippingPricesComponent } from './shipping-prices/shipping-prices.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  {
    path: storeRoute.cart,
    component: CartComponent
  },{
    path: `${storeRoute.detail}/:productId`,
    component: ProductDetailComponent
  },{
    path: storeRoute.shippingPrices,
    component: ShippingPricesComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
