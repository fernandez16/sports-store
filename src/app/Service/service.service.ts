import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.Url);
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.Url + '/' + id);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.Url, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(this.Url, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete<Product>(this.Url + '/' + product.id);
  }
}
