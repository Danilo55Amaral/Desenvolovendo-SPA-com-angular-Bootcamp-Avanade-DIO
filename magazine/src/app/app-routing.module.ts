import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductCrudComponent } from './components/product-crud/product-crud.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rotas de navegação 
const routes: Routes = [ 
  {
    path: "",  // rota raiz da nossa aplicação
    component: HomeComponent
  },
  {
    path: "products", // primeira rota de produtos
    component: ProductCrudComponent
  },
  {
    path: "products/create", // primeia rota para criação de produtos
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id", // rota para atualização de produtos
    component: ProductUpdateComponent
  },
  {
    path: "products/delet/:id", // rota para deletar  produtos
    component: ProductDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
