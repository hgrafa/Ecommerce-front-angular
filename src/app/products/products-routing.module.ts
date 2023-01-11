import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';

// criando subrotas em produtos para cada operação dentro do CRUD
const routes: Routes = [
  {path: '', component: ProductsComponent },
  {path: 'cadastrar', component: ProductsFormComponent },
  {path: 'atualizar/:codigo', component: ProductsUpdateComponent },
  {path: 'remover/:codigo', component: ProductsDeleteComponent }
  // reaproveitando o código através do caminho da rota
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
