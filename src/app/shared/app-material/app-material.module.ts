import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';

// criando um módulo para exportarmos diversos
// componentes do angular material com mais facilidade
@NgModule({
  exports: [
    MatTableModule, /*módulo das tabelas*/
    MatIconModule, /*módulo para ícones do angular material*/
    MatFormFieldModule, /*módulo para formulários*/
    MatInputModule, /*módulo para input do angular*/
    MatCardModule, /*módulo para cards do angular material*/
    MatToolbarModule, /*módulo para toolbar*/
    MatProgressSpinnerModule /*módulo para colocar spinner durante o carregamento da página*/
  ],
})
export class AppMaterialModule { }
