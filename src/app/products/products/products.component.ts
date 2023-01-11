import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Product } from './../model/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  displayedColumns = ['codigo', 'nome', 'preco', 'actions'];
  products$ : Observable<Product[]>;

  // construtor injetando o serviço
  // injetando também o roteador e a rota ativa no momento
  constructor(
    private productsService : ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // recupera todos os produtos no inicio da pagina
    this.products$ = productsService.allProducts()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([]);
      })
      )
  }

  // método para o botão de adicionar
  onAdd() {
    console.log('on add caleed');
    this.router.navigate(['cadastrar'], {relativeTo: this.route});
  }

  // método para o botão de editar
  onEdit(product: Product) {
    this.router.navigate([`atualizar/${product.codigo}`], {relativeTo: this.route})
  }

  // método para o botão de remover
  onDelete(product: Product) {
    this.router.navigate([`remover/${product.codigo}`], {relativeTo: this.route});
  }

}
