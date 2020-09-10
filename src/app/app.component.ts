import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './services/http.service';
import { StateService } from './services/state.service';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as loginActions from './store/action';
import * as fromProduct from './components/products/store/products.reducer'
import * as ProductActions  from './components/products/store/product.action'
import { Product } from './components/products/store/product.model'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	id: number;
	products: any;
	public loggedInFormView: boolean;
	public addProductFormView: boolean;
	public editProductFormView: boolean;

	products$: Observable<Product[]>

	constructor(
		private httpService: HttpService,
		public stateService: StateService,
		private store: Store<any>
	) {
		this.getProducts();
	}

	ngOnInit(): void {
		this.store.subscribe((state) => {
			this.loggedInFormView = state.loginView.loggedInFormView;
			this.addProductFormView = state.loginView.addProductFormView;
			this.editProductFormView = state.loginView.editProductFormView;
		});

	}

	getProducts() {
			this.store.dispatch(new ProductActions.LoadProducts());
			this.products$ = this.store.pipe(select(fromProduct.getProducts));
	}

	editItem(id) {
		this.id = id;
	}
}
