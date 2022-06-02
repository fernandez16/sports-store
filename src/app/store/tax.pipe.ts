import { Pipe } from '@angular/core';

@Pipe({
  name: 'addTax',
})
export class TaxPipe {
  taxDefault = 10;

  transform(value: any, tax?: any): number {
    let newValue = Number.parseFloat(value);
    let appliedTax = tax == undefined ? this.taxDefault : Number.parseInt(tax);
    return newValue + (newValue * (appliedTax / 100))
  }
}
