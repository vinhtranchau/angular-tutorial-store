import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() { }

  calculateTax(amount: number) {
    return amount * 0.1;
  }
}
