import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './services/http.service';
import { StateService } from './services/state.service';
import { CustomElement } from './lit-elements/cutom-button-elements';
import { Store } from '@ngrx/store';
import * as loginActions from './store/action'
console.assert(CustomElement !== undefined);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  title = 'test-assignment';
  id:number
  products: any;
  public loggedInFormView: boolean;
  public addProductFormView: boolean;
  public editProductFormView: boolean;
  constructor(
    private httpService: HttpService,
    public stateService: StateService,
    private store: Store<any>
  ) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state, 'app');
      this.loggedInFormView = state.loginView.loggedInFormView;
      this.addProductFormView = state.loginView.addProductFormView;
      this.editProductFormView = state.loginView.editProductFormView;
    })
    // console.log(this.loggedInFormView$);

  }

  getProducts() {
    this.httpService.getSecured(environment.getProducts).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  getId(id) {
    console.log(id);
  }
  addItem(newItem: string) {
    this.httpService.getSecured(environment.getProducts).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  editItem(id){
    this.id=id
    console.log(id);

  }
}
