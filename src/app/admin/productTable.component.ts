import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ServiceService } from '../Service/service.service';

@Component({
  templateUrl: 'productTable.component.html',
})
export class ProductTableComponent {
  products: Product[];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => (this.products = data));
  }

  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct(product: Product) {
    this.service
      .deleteProduct(product)
      .subscribe((data) => (this.products = this.products.filter((p) => p !== product)));
  }
}
