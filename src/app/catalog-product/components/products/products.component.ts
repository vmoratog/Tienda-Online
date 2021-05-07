import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';
import { ProductsService } from '../../../core/services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class CatalogProductsComponent implements OnInit {
  products!: Product[];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts()
  }

  clickProduct(id: number) {
    console.log("product")
    console.log(id)
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products
      })
  }

}
