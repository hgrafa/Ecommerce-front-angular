import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFormComponent,
    ProductsUpdateComponent,
    ProductsDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, /*importando roteamento de produtos*/
    ReactiveFormsModule, /*importando Reactive Forms*/
    AppMaterialModule /*importando nosso módulo próprio do angular material*/
  ]
})
export class ProductsModule { }
