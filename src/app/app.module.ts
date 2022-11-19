import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from './pages/store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule,
    AppRoutingModule,
    UiKitModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
