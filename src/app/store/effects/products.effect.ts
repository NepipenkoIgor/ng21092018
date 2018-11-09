import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess } from '../actions/products.action';
import { ProductsService } from '../../content/products/products.service';

@Injectable()
export class ProductsEffects {
    // Listen for the 'LOGIN' action
    @Effect()
    products$: Observable<Action> = this.actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() => this._productsService.getProducts()
            .pipe(
                map((res: any) => new GetProductsSuccess(res.data)),
                catchError((err) => of(new GetProductsError(err)))
            )
        )
    );
    //
    // @Effect()
    // buyProducts$: Observable<Action> = this.actions$.pipe(
    //     ofType('BUY_PRODUCTs'),
    //     withLatestFrom(this._store.select(selectAll)),
    //     switchMap(([,cartProducts]) =>
    //         this._http.get(`${this._baseUrl}/products`)
    //             .pipe(
    //                 map((res: any) => new GetProductsSuccess(res.data)),
    //                 catchError((err) => of(new GetProductsError(err)))
    //             )
    //     )
    // );

    constructor(
        private actions$: Actions,
        private _productsService: ProductsService,
    ) {}
}
