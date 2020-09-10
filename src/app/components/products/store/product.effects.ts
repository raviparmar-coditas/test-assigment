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
    map((action: productActions.CreateProduct) => action.payload),
    mergeMap((product: Product) =>
      this.httpService.postSecured(environment.addProducts,product).pipe(
        switchMap(
          (newproduct: Product) =>[
            new showModalActions.HideAddProductAction(),
            new productActions.CreateProductSuccess(newproduct)
        ]
        ),
        catchError(err => of(new productActions.CreateProductFail(err)))
      )
    )
  );

}