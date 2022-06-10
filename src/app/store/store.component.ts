import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  constructor(
    private repository: ProductRepository,
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

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    // this.router.navigateByUrl("/cart");
  }

  get paginatedProducts(): Product[] {
    // return this.repository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.products.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
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
  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }
}
