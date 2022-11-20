import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { heroRoute } from './core/routes';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule)
}, {
  path: heroRoute.hero,
  loadChildren: () => import('./pages/hero/hero.module').then(m => m.HeroModule)
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
