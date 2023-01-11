import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../model/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})


export class ProductsDeleteComponent {

  // injeções de dependência
  constructor(private productService : ProductsService,
      private route : ActivatedRoute,
      private router : Router ){

  }

  // para caso o usuário escolha apagar
  onSim() {
    this.productService.delete(this.route.snapshot.paramMap.get('codigo'))
    .subscribe({
      next: () => console.log('removido')
    })
    this.router.navigate(['/products']);
  }

  // para caso o usuário não queira mais apagar
  onNao() {
    this.router.navigate(['/products']);
  }

}
