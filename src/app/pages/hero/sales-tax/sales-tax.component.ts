import { Component, OnInit } from '@angular/core';
import { TaxService } from '../../../core/services/tax.service';

@Component({
  selector: 'my-sales-tax',
  templateUrl: './sales-tax.component.html',
  styleUrls: ['./sales-tax.component.scss']
})
export class SalesTaxComponent implements OnInit {
  amount: number;

  constructor(private taxService: TaxService) { }

  ngOnInit(): void {
  }

  calculate(): number {
    return this.taxService.calculateTax(this.amount);
  }
}
