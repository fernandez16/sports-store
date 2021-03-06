import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { TaxPipe } from './tax.pipe';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, CommonModule],
  declarations: [
    StoreComponent,
    TaxPipe,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
