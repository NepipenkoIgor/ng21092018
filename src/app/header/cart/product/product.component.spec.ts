import { ICartProduct } from '../../../store/reducers/cart.reducer';
import { ProductComponent } from './product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const testProduct: ICartProduct = {
    '_id': '1',
    'title': 'Test Product',
    'serial': 12,
    'author': 'Puma',
    'price': 1234,
    'src': 'img.png',
    count: 1
};

describe('Product component', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProductComponent
            ]
        });

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        component.product = testProduct;

        spyOn(component, 'decrementProduct')
            .and
            .callThrough();
        spyOn(component, 'incrementProduct')
            .and
            .callThrough();
        spyOn(component, 'removeProduct')
            .and
            .callThrough();
        spyOn(component.remove, 'emit')
            .and
            .callThrough();
        spyOn(component.decrement, 'emit')
            .and
            .callThrough();
        fixture.detectChanges();
    });

    it('should increment', () => {
        const incrementProduct = fixture.debugElement.query(By.css('.count__increase'));
        incrementProduct.triggerEventHandler('click', component.product);
        fixture.detectChanges();
        expect(component.incrementProduct)
            .toHaveBeenCalledWith(component.product);
    });

    it('should decrement and remove', () => {
        const decrementProduct = fixture.debugElement.query(By.css('.count__decrease'));
        decrementProduct.triggerEventHandler('click', component.product);
        fixture.detectChanges();
        expect(component.decrementProduct)
            .toHaveBeenCalledWith(component.product);
        expect(component.remove.emit)
            .toHaveBeenCalledWith(component.product);
        expect(component.decrement.emit)
            .not
            .toHaveBeenCalledWith(component.product);
    });


    it('should decrement ', () => {
        component.product = {
            ...component.product,
            count: 2
        };
        const decrementProduct = fixture.debugElement.query(By.css('.count__decrease'));
        decrementProduct.triggerEventHandler('click', component.product);
        fixture.detectChanges();
        expect(component.decrementProduct)
            .toHaveBeenCalledWith(component.product);
        expect(component.remove.emit)
            .not
            .toHaveBeenCalledWith(component.product);
        expect(component.decrement.emit)
            .toHaveBeenCalledWith(component.product);
    });
});
