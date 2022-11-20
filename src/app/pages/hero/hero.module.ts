import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HeroComponent
    }]),
    FormsModule
  ]
})
export class HeroModule { }
