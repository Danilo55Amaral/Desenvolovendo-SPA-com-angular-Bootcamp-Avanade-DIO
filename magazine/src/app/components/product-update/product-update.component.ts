import { Product } from './../product-create/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  // injetando o ProductService e o Router
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  // metodo utilizado para o formulário vim preenchido 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });   // fazendo uma chamada para o nosso service // 
  }

  // metodo para dar funcionalidade ao nosso botão salvar 
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Peça atualizada com sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
