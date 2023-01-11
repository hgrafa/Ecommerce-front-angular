import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Product } from './../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // rota para nossa API em java
  private readonly javaAPI = 'http://localhost:8082/api/produtos';

  // construtor fazendo injeção do cliente http
  constructor(private httpClient: HttpClient) {}

  // serviço para um get em todos os produtos
  allProducts() {
    return this.httpClient.get<Product[]>(this.javaAPI).pipe(
      first()
      // delay(3000),
      // tap(products => console.log(products))
    );
  }

  // serviço para salvar um novo produto
  save(record: Product) {
    return this.httpClient.post<Product>(`${this.javaAPI}/cadastrar`, record);
  }

  // serviço para atualizar um produto a partir e seu código
  update(codigo: string, newRecord: Product) {
    return this.httpClient.put<Product>(
      `${this.javaAPI}/atualizar?codigo=${codigo}`,
      newRecord
    );
  }

  // serviço para deletar um produto a partir de seu código
  delete(codigo: string | null) {
    return this.httpClient.delete(
      `${this.javaAPI}/remover?codigo=${codigo}`
    );
  }

  // função para retornar identificar o retorno de possíveis erros
  onError() {
    console.log('erro!');
  }
}
