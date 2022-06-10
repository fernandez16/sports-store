import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url: string = 'http://localhost:8080/prodocuts';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.Url);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.Url, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(this.Url + '/' + product.id, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete<Product>(this.Url + '/' + product.id);
  }
}
