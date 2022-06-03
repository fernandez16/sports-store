import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(
      1,
      'Product 1',
      'Category 1',
      'Description 1 (Category 1)',
      99.5
    ),
    new Product(
      2,
      'Product 2',
      'Category 1',
      'Description 2 (Category 1)',
      120
    ),
    new Product(
      3,
      'Product 3',
      'Category 2',
      'Description 3 (Category 2)',
      76.5
    ),
    new Product(
      4,
      'Product 4',
      'Category 2',
      'Description 4 (Category 2)',
      100
    ),
    new Product(
      5,
      'Product 5',
      'Category 3',
      'Description 5 (Category 3)',
      100
    ),
    new Product(
      6,
      'Product 6',
      'Category 3',
      'Description 6 (Category 3)',
      100
    ),
    new Product(
      7,
      'Product 7',
      'Category 3',
      'Description 7 (Category 3)',
      100
    ),
    new Product(
      8,
      'Product 8',
      'Category 4',
      'Description 8 (Category 4)',
      100
    ),
    new Product(
      9,
      'Product 9',
      'Category 5',
      'Description 9 (Category 5)',
      100
    ),
    new Product(
      10,
      'Product 10',
      'Category 5',
      'Description 10 (Category 5)',
      100
    ),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
