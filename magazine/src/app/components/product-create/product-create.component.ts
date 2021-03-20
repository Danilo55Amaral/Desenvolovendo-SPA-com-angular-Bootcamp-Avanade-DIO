import { ProductService } from './../product.service'; // importando o product.service
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importando o Router
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit { 
  // definir o produto
  product: Product = {
    name: '',
    price: null,
    quantidade: null,
    marca: '',
    fabricante: ''

}  
  
  // injetando o productService // injetando também o router
  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void { 
   
  }

  createProduct(): void { // metodos para mensagem // passei também o produto definido 
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Concluido!')
      this.router.navigate(['/products'])
    } )

    
  }

  cancel(): void { // metodo para retornar para o product
    this.router.navigate(['/products'])
  }

}
