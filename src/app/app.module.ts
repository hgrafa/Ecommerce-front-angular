import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryPipe } from './shared/pipes/category.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, /*habilitando animações no angular*/
    MatToolbarModule, /*importando módulo para a toolbar*/
    HttpClientModule, /*importando módulo para chamadas http*/
    MatButtonModule, /*importando módulo para navbar*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
