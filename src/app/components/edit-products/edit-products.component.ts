import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Output, EventEmitter } from '@angular/core';
import { CustomElement } from '../../lit-elements/cutom-button-elements';
console.assert(CustomElement !== undefined);
@Component({
	selector: 'app-edit-products',
	templateUrl: './edit-products.component.html',
	styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent implements OnInit {
	@Output() newItemEvent = new EventEmitter<any>();
	@Input() id;
	constructor(
		public stateService: StateService,
		private httpService: HttpService
	) {}

	editProductForm = new FormGroup({
		heading: new FormControl(),
		description: new FormControl(),
		imageUrl: new FormControl(),
		id: new FormControl(),
	});
	ngOnInit(): void {
		console.log(this.id);

		this.getProductById(this.id);
	}
	getProductById(id) {
		this.httpService
			.getSecured(environment.getProductsById.replace('{id}', id))
			.subscribe((data) => {
				console.log(data);
				this.editProductForm.patchValue(data);
				// this.stateService.addProductFormView = false;
				// this.newItemEvent.emit(data);
			});
	}
	editProduct() {
		this.httpService
			.patchSecured(
				environment.editProductsBy.replace('{id}', this.id),
				this.editProductForm.value
			)
			.subscribe((data) => {
				console.log(data);
				this.stateService.editProductFormView = false;
				this.newItemEvent.emit(data);
			});
	}

	Cancel() {
		this.stateService.editProductFormView = false;
	}
}
