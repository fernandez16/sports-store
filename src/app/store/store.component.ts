import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  constructor(
    private cart: Cart,
    private router: Router,
    private service: ServiceService
  ) {}

  public products: Product[];
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => (this.products = data));
  }

  get categories(): string[] {
    let categoryArray: string[] = [];
    this.products.forEach((product) => {
      if (!categoryArray.includes(product.category)) {
        categoryArray.push(product.category)
      }
    });
    return categoryArray;
  }

  get paginatedProducts(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.filteredProducts.slice(
      pageIndex,
      pageIndex + this.productsPerPage
    );
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory != null) {
      return this.products.filter((obj) => {
        return obj.category === this.selectedCategory;
      });
    } else return this.products;
  }

  get pageCount(): number {
    return Math.ceil(this.filteredProducts.length / this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.filteredProducts.length / this.productsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
