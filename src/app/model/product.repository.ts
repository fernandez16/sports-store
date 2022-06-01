import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './staic.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProduct(id: number): Product | undefined {   // use | if typescript type is active
    return this.products.find((p) => p.id == id); // searchs product by id, within the products vector
  }

  getCategories(): string[]{
    return this.categories;
  }

  getProducts(category: string = null): Product[]{
    return this.products.filter((p) => category == null || category == p.category)
  }
}
