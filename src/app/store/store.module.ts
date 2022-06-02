import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { CartSummaryComponent } from "./cartSummary.component";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { TaxPipe } from "./tax.pipe";

@NgModule({
  imports:[ModelModule, BrowserModule, FormsModule],
  declarations:[StoreComponent, TaxPipe, CounterDirective, CartSummaryComponent],
  exports:[StoreComponent]
})

export class StoreModule{}
