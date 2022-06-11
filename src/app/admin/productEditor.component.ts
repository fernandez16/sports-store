import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        service.getProductById(activeRoute.snapshot.params['id'])
      );
    }
  }

  ngOnInit(): void {
    console.log(this.service.getProductById(activeRoute.snapshot.params['id']))
    this.service.getProducts().subscribe((data) => (this.products = data));
  }

  save(product: Product) {
    this.service.updateProduct(product).subscribe((data) => {
      product = data;
    });
  }
}
