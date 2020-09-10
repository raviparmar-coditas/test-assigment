import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Output, EventEmitter } from '@angular/core';
import { CustomElement } from '../../../lit-elements/cutom-button-elements';
import { Store, select } from '@ngrx/store';
import * as loginActions from '../../../store/action';
import * as ProductActions from '../store/product.action';
import * as fromProduct from '../store/products.reducer';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';

console.assert(CustomElement !== undefined);
@Component({
	selector: 'app-edit-products',
	templateUrl: './edit-products.component.html',
	styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent implements OnInit {
	@Input() id;
	constructor(
		public stateService: StateService,
		private httpService: HttpService,
		private store: Store<any>
	) {}

	editProductForm = new FormGroup({
		heading: new FormControl(),
		description: new FormControl(),
		imageUrl: new FormControl(),
		id: new FormControl(),
	});

	ngOnInit(): void {
		this.getProductById(this.id);
	}

	getProductById(id) {
		this.store.dispatch(new ProductActions.LoadProduct(id));
		const product$: Observable<any> = this.store.pipe(
			select(fromProduct.getProductById)
		);
		product$.subscribe((formData) => {
			if (formData) {
				this.editProductForm.patchValue(formData);
			}
		});
	}
	
	editProduct() {
		this.store.dispatch(new ProductActions.UpdateProduct(this.editProductForm.value));
	}

	Cancel() {
		this.store.dispatch(new loginActions.HideEditProductAction());
	}
}
