import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./staic.datasource";

@NgModule({
  providers: [StaticDataSource, ProductRepository]
})

export class ModelModule{}
