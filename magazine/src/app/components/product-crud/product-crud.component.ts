import { HeaderService } from './../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importando o router

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  // injetando esse router pelo angular para dentro do componente 
  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Peças',
      icon: 'directions_bike',
      routeUrl:'/products'
    }
   }

  ngOnInit(): void {
  }
  // função para o botao navegar para a outra tela , passando o router como evento
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  // foi injetado uma dependencia para dentro de uma classe utilizando a injeção de dependencia.
}
