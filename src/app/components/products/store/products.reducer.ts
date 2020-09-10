import * as productActions from './product.action';
import { Product } from './product.model';
import * as fromRoot from './app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
	products: Product[];
	loading: boolean;
	loaded: boolean;
	error: string;
	productId: Number;
	selectedProduct: Object;
}

export interface AppState extends fromRoot.AppState {
	products: ProductState;
}

export const initialState: ProductState = {
	products: [],
	loading: false,
	loaded: false,
	error: ' ',
	productId: null,
	selectedProduct: null,
};

export function productReducer(
	state = initialState,
	action: productActions.ProductAction
): ProductState {
	switch (action.type) {
		case productActions.ProductActionTypes.LOAD_PRODUCTS: {
			return {
				...state,
				loading: true,
			};
		}

		case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
			return {
				...state,
				loading: false,
				loaded: true,
				products: action.payload,
			};
		}

		case productActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
			return {
				...state,
				products: [],
				loaded: false,
				loading: false,
				error: action.payload,
			};
		}

		case productActions.ProductActionTypes.CREATE_PRODUCT: {
			return {
				...state,
				loading: true,
			};
		}

		case productActions.ProductActionTypes.CREATE_PRODUCT_SUCCESS: {
			return {
				...state,
				loading: false,
				loaded: true,
				products: [...state.products, action.payload],
			};
		}

		case productActions.ProductActionTypes.CREATE_PRODUCT_FAIL: {
			return {
				...state,
				loaded: false,
				loading: false,
				error: action.payload,
			};
		}

		case productActions.ProductActionTypes.LOAD_PRODUCT: {
			return {
				...state,
				loading: true,
				productId: action.payload,
			};
		}

		case productActions.ProductActionTypes.LOAD_PRODUCT_SUCCESS: {
			return {
				...state,
				loading: false,
				loaded: true,
				selectedProduct: action.payload,
			};
		}

		case productActions.ProductActionTypes.LOAD_PRODUCT_FAIL: {
			return {
				...state,
				products: [],
				loaded: false,
				loading: false,
				error: action.payload,
			};
		}

		case productActions.ProductActionTypes.UPDATE_PRODUCT: {
			return {
				...state,
				loading: true,
				selectedProduct: action.payload,
			};
		}
		case productActions.ProductActionTypes.UPDATE_PRODUCT_SUCCESS: {
			let newProducts = [...state.products];
			newProducts = newProducts.map((item) => {
				if (action.payload.id === item.id) {
					return action.payload;
				}
				return item;
      });
			return {
				...state,
				loading: false,
        loaded: true,
        products: newProducts
			};
    }
    
    case productActions.ProductActionTypes.UPDATE_PRODUCT_FAIL: {
			return {
				...state,
				products: [],
				loaded: false,
				loading: false,
				error: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}

const getProductFeatureState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
	getProductFeatureState,
	(state: ProductState) => state.products
);
export const getError = createSelector(
	getProductFeatureState,
	(state: ProductState) => state.error
);
export const getProductById = createSelector(
	getProductFeatureState,
	(state: ProductState) => state.selectedProduct
);
