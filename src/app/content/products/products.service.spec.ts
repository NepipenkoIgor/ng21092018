import { inject, TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { IProduct } from '../../store/reducers/products.reducer';
import { environment } from '../../../environments/environment';


const testProducts: IProduct[] = [
    {
        '_id': '1',
        'title': 'Test Product',
        'serial': 12,
        'author': 'Puma',
        'price': 1234,
        'src': 'img.png',
    },
    {
        '_id': '1',
        'title': 'Test Product',
        'serial': 12,
        'author': 'Puma',
        'price': 1234,
        'src': 'img.png',
    },
];

describe('ProductsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            HttpClientTestingModule
        ],
        providers: [
            ProductsService,
            {
                provide: BASE_URL_TOKEN,
                useValue: BASE_URL,
                multi: true
            },
        ]
    }));

    it('test service', inject([ProductsService, HttpTestingController], (
        _productsService: ProductsService, _backend: HttpTestingController
    ) => {
        _productsService.getProducts()
            .subscribe((res: { data: IProduct[] }) => {
                expect(Array.isArray(res.data))
                    .toBeTruthy();
                expect(res.data.length)
                    .toEqual(2);
            });

        _backend.expectOne({
            method: 'GET',
            url: `${environment.base_url}/products`
        })
            .flush({ data: testProducts });

    }));

});
