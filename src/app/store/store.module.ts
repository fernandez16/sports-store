import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { TaxPipe } from "./tax.pipe";
import { RouterModule } from "@angular/router";

@NgModule({
  imports:[ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations:[StoreComponent, TaxPipe, CounterDirective, CartSummaryComponent, CartDetailComponent],
  exports:[StoreComponent]
})

export class StoreModule{}
