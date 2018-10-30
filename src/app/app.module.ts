import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './content/products/card/card.component';
import { ProductsFilterPipe } from './content/products/products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './content/products/products.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { OneProductResolverService } from './content/products/one-product/one-product-resolver.service';
import { CustomPreloadService } from './common/services/custom-preload.service';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effect';

@NgModule({
    declarations: [
        // Derectives/Pipes
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        FooterComponent,
        ProductsComponent,
        OneProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadService }),
        EffectsModule.forRoot([ProductsEffects]),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [
        OneProductResolverService,
        CustomPreloadService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL,
            multi: true
        },
        {
            provide: 'BASE_URL',
            useValue: 'http://localhost:3000',
            multi: true
        }
        // Services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
