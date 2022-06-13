import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ServiceService } from '../Service/service.service';

@Component({
  templateUrl: 'productEditor.component.html',
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();
  products: Product[];

  constructor(
    private service: ServiceService,
    activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        service
          .getProductById(activeRoute.snapshot.params['id'])
          .subscribe((data) => (this.product = data))
      );
    }
  }

  ngOnInit(): void {
    console.log();
    this.service.getProducts().subscribe((data) => (this.products = data));
  }

  save() {
    if (this.editing == true) {
      this.service.updateProduct(this.product).subscribe((data) => {
        this.product = data;
        alert('product edited');
        this.router.navigateByUrl('/admin/main');
      });
    } else {
      this.service.createProduct(this.product).subscribe((data) => {
        this.product = data;
        this.router.navigateByUrl('/admin/main');
      });
    }
  }
}
