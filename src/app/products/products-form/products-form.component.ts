import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProductsService } from './../services/products.service';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {

  form: FormGroup;

  // injeções de dependência
  constructor(private formBuilder: FormBuilder,
    private service : ProductsService) {
    // colocando os campos do formulário
    this.form = this.formBuilder.group({
      codigo: [null],
      nome: [null],
      preco: [null]
    })
  }

  // método para hora de submeter
  onSubmit() {
    this.service.save(this.form.value)
    .subscribe({
      next: (result) => console.log(result),
      error: () => this.onError()
    });
  }

  // caso cancele o cadastro
  onCancel() {

  }

  // caso aconteça algum erro
  onError() {
  }

}
