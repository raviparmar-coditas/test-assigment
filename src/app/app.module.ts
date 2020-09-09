import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/products/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './common-components/button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductsComponent } from './components/products/edit-products/edit-products.component';
import { productReducer } from './components/products/store/products.reducer'
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LoginComponent,
    ButtonComponent,
    AddProductComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      loginView: reducer,
      "product": productReducer
      
    })
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
