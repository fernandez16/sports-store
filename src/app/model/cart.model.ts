import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity; // si ya existe el producto en el carro
    } else {
      this.lines.push(new CartLine(product, quantity)); // cuando es un nuevo producto que meto al carro
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex((line) => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }
  updateQuantity(product: Product, quantity: number) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.product.price;
    });
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get linteTotal() {
    return this.quantity * this.product.price;
  }
}
