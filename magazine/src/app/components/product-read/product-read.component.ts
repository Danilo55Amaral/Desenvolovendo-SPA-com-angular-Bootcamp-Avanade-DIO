import { ProductService } from './../product.service';
import { Product } from './../product-create/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // Atributo product do tipo array
  products: Product[] 
  displayedColumns = ['id', 'name', 'price', 'quantidade', 'marca', 'fabricante', 'action']
   // injetando o product service dentro desse componente
  constructor(private productService: ProductService) { }

  ngOnInit(): void { 
    this.productService.read().subscribe(products => {
      
      this.products = products
      
    })
  }

}
