import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";

import { HttpService } from "../../../services/http.service";
import * as productActions from "./product.action";
import { Product } from "./product.model";
import {environment } from 'src/environments/environment';
import * as showModalActions from "../../../store/action";
@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {}

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProducts>(
        productActions.ProductActionTypes.LOAD_PRODUCTS
    ),
    mergeMap((action: productActions.LoadProducts) =>
      this.httpService.getSecured(environment.getProducts).pipe(
        map(
          (products: Product[]) =>
            new productActions.LoadProductsSuccess(products)
        ),
        catchError(err => of(new productActions.LoadProductsFail(err)))
      )
    )
  );

  @Effect()
  createProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.CreateProduct>(
        productActions.ProductActionTypes.CREATE_PRODUCT
    ),
    mergeMap((action: productActions.CreateProduct) =>
      this.httpService.postSecured(environment.addProducts,action.payload).pipe(
        switchMap(
          (newproduct: Product) =>[
            new productActions.CreateProductSuccess(newproduct),
            new showModalActions.HideAddProductAction()
        ]
        ),
        catchError(err => of(new productActions.CreateProductFail(err)))
      )
    )
  );


  @Effect()
  loadProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProduct>(
        productActions.ProductActionTypes.LOAD_PRODUCT
    ),
    mergeMap((action: productActions.LoadProduct) =>
      this.httpService.getSecured(environment.getProductsById.replace('{id}', action.payload.toString())).pipe(
        map(
          (products: Product) =>
            new productActions.LoadProductSuccess(products)
        ),
        catchError(err => of(new productActions.LoadProductFail(err)))
      )
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.UpdateProduct>(
        productActions.ProductActionTypes.UPDATE_PRODUCT
    ),
    mergeMap((action: productActions.UpdateProduct) =>
      this.httpService.patchSecured(environment.getProductsById.replace('{id}', action.payload.id.toString()),action.payload).pipe(
        switchMap(
          (products: Product) =>[
            new productActions.UpdateProductSuccess(products),
            new showModalActions.HideEditProductAction()
          ]
        ),
        catchError(err => of(new productActions.UpdateProductFail(err)))
      )
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.DeleteProduct>(
        productActions.ProductActionTypes.DELETE_PRODUCT
    ),
    mergeMap((action: productActions.DeleteProduct) =>
      this.httpService.deleteSecured(environment.deleteProducts.replace('{id}', action.payload.toString())).pipe(
        map(
          () =>
            new productActions.DeleteProductSuccess(action.payload)
        ),
        catchError(err => of(new productActions.DeleteProductFail(err)))
      )
    )
  );

}