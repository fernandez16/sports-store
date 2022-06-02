import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './staic.datasource';

@NgModule({
  providers: [StaticDataSource, ProductRepository, Cart],
})
export class ModelModule {}
