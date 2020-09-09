import { Action } from '@ngrx/store';
import { Product } from './product.model';

export enum ProductActionTypes {
	LOAD_PRODUCTS = '[Product] Load Products',
	LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
	LOAD_PRODUCTS_FAIL = '[Product] Load Products Fail',
	CREATE_PRODUCT = '[Product] Create Products',
	CREATE_PRODUCT_SUCCESS = '[Product] Create Product Success',
	CREATE_PRODUCT_FAIL = '[Product] Create Product Fail',
}
// getProducts
export class LoadProducts implements Action {
	readonly type = ProductActionTypes.LOAD_PRODUCTS;
}
export class LoadProductsSuccess implements Action {
	readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
	constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
	readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
	constructor(public payload: string) {}
}
// createProduct
export class CreateProduct implements Action {
	readonly type = ProductActionTypes.CREATE_PRODUCT;
	constructor(public payload: Product) {}
}
export class CreateProductSuccess implements Action {
	readonly type = ProductActionTypes.CREATE_PRODUCT_SUCCESS;
	constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
	readonly type = ProductActionTypes.CREATE_PRODUCT_FAIL;
	constructor(public payload: string) {}
}

export type ProductAction =
	| LoadProducts
	| LoadProductsSuccess
  | LoadProductsFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail;
