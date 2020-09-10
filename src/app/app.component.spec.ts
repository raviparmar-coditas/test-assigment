import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/products/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './common-components/button/button.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductsComponent } from './components/products/edit-products/edit-products.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        LoginComponent,
        ButtonComponent,
        AddProductComponent,
        EditProductsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
