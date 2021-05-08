import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: "assets/images/dessert-1.jpg",
      title: 'Brownie',
      price: 2500,
      description: 'Suave y húmedo brownie de chocolate',
      quantity: 3
    },
    {
      id: '2',
      image: 'assets/images/dessert-2.jpg',
      title: 'Pan de chocolate',
      price: 10000,
      description: 'Pan artesanal de chocolate semi-amargo',
      quantity: 1
    },
    {
      id: '3',
      image: 'assets/images/dessert-3.jpg',
      title: 'Trufas',
      price: 2000,
      description: 'Cajas de trufas de chocolate con rellenos surtidos',
      quantity: 6
    },
    {
      id: '4',
      image: 'assets/images/dessert-4.jpg',
      title: 'Macaroons',
      price: 4000,
      description: 'Macaroons de diferentes sabores',
      quantity: 5
    },
    {
      id: '5',
      image: 'assets/images/dessert-5.jpg',
      title: 'Galletas',
      price: 3500,
      description: 'Galletas con chips de chocolate',
      quantity: 4
    },
    {
      id: '6',
      image: 'assets/images/dessert-6.jpg',
      title: 'Helado',
      price: 4000,
      description: 'Helado artesanales sencillo de diferentes sabores.',
      quantity: 1
    },
    {
      id: '7',
      image: 'assets/images/dessert-7.jpg',
      title: 'Cupcakes',
      price: 8000,
      description: 'Cupcakes de chocolate con crema de diferentes sabores.',
      quantity: 2
    },
    {
      id: '8',
      image: 'assets/images/dessert-8.jpg',
      title: 'Paletas',
      price: 5000,
      description: 'Paletas artesanales de diferentes sabores.',
      quantity: 3
    },
    {
      id: '9',
      image: 'assets/images/dessert-9.jpg',
      title: 'Donuts',
      price: 5000,
      description: 'Donuts con rellenos y coberturas de diferentes sabores.',
      quantity: 4
    },
    {
      id: '10',
      image: 'assets/images/dessert-10.jpg',
      title: 'Torta',
      price: 4500,
      description: 'Porción de torta de chocolate.',
      quantity: 1
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  //Catálogo 
  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }

  // Para el curso de platzi

  getAllProductsPlatzi() {
    // return this.products
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products')
  }

  getProductPlatzi(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products${id}`)
  }

}
