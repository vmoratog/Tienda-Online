import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from '../../../core/models/product';
import { ProductsService } from '../../../core/services/products.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      //this.product = this.productsService.getProduct(id)
      this.fetchProduct(id)
      //const newProduct = this.productsService.getProduct(id)
      //if (newProduct) this.product = newProduct
    })
  }

  fetchProduct(id: string) {
    this.productsService.getProductPlatzi(id)
      .subscribe(product => {
        this.product = product
      })
  }

}
