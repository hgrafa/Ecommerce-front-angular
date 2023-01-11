import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss']
})

export class ProductsUpdateComponent {

  // atributo de formulário
  form: FormGroup;

  // construtor fazendo injeções de dependência
  constructor(private formBuilder: FormBuilder,
    private service : ProductsService,
    private route : ActivatedRoute) {

    // builder para o formulário
    this.form = this.formBuilder.group({
      codigo: [null],
      nome: [null],
      preco: [null]
    })
  }

  // caso submeta o formulário
  onSubmit() {
    this.form.value.codigo = this.route.snapshot.paramMap.get('codigo');
    this.service.update(this.form.value.codigo, this.form.value)
    .subscribe({
      next: (result) => console.log(result),
      error: () => this.onError()
    });
  }

  // caso cancele o formulário
  onCancel() {

  }

  // caso de erro
  onError() {
  }

}
