import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductComponent } from './components/product/product-component/product-component.component';
import { CatalogProductsComponent } from './components/products/products.component';
import { CatalogProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatalogProductsRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module'

@NgModule({
  declarations: [
    CatalogProductComponent,
    CatalogProductsComponent,
    CatalogProductDetailComponent
  ],
  imports: [
    CommonModule,
    CatalogProductsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CatalogProductsModeule {

}