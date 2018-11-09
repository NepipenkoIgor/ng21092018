import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../config';
import { Observable } from 'rxjs';
import { IProduct } from '../../store/reducers/products.reducer';

export class ProductsService {

    constructor(
        private _http: HttpClient,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string,
    ) { }


    public getProducts(): Observable<{ data: IProduct[] }> {
        return this._http.get<{ data: IProduct[] }>(`${this._baseUrl}/products`);

    }

}
