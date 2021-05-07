import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatalogProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
    path: '',
    component: CatalogProductsComponent
  },
  {
    path: ':id',
    component: CatalogProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogProductsRoutingModule { }