import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
