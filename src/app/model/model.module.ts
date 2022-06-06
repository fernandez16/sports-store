import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './staic.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    AuthService,
    { provide: StaticDataSource, useClass: RestDataSource },
  ],
})
export class ModelModule {}
