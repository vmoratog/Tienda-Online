import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product'

@Component({
  selector: 'product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponent implements OnChanges, OnInit {

  @Input()
  product!: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log("1. constructor")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("2. ngOnChanges")
    console.log("changes")
  }

  ngOnInit() {
    console.log("3. ngOnInit")
  }

  addCart() {
    console.log("Agrear al carrito")
    this.productClicked.emit(this.product.id)
  }
}
