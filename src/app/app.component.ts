import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProductsPending } from './store/actions/products.action';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck, OnChanges,
    AfterContentChecked, AfterContentInit,
    AfterViewChecked, AfterViewInit {

    public logoImg = 'assets/img/logo.png';

    public constructor(
        private _store: Store<any>
    ) {
        console.log('Constractor Start');
    }

    public ngOnChanges() {
        console.log('ngOnChanges');
    }

    public ngOnInit(): void {
        console.log('ngOnInit');
        this._store.dispatch(new GetProductsPending());
    }

    public ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    public ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    public ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    public ngAfterContentInit(): void {
        console.log('AfterContentInit');
    }

    public ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }
}
