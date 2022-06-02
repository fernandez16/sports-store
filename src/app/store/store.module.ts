import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { TaxPipe } from "./tax.pipe";

@NgModule({
  imports:[ModelModule, BrowserModule, FormsModule],
  declarations:[StoreComponent, TaxPipe],
  exports:[StoreComponent]
})

export class StoreModule{}
