import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {ButtonComponent} from './button/button.component';
import {HeaderComponent} from './header/header.component';
import { FabFooterComponent } from './fab-footer/fab-footer.component';

@NgModule({
    declarations: [

        ButtonComponent,
        HeaderComponent,
        FabFooterComponent
    ],
    imports: [BrowserModule],
    entryComponents: [
        ButtonComponent,
        HeaderComponent,
        FabFooterComponent
    ]
})
export class AppModule {
    constructor(private injector: Injector) {
        
        const customButton = createCustomElement(ButtonComponent, {injector});
        customElements.define('custom-button', customButton);

        const customHeader = createCustomElement(HeaderComponent, {injector});
        customElements.define('custom-header', customHeader);

        const customFooter = createCustomElement(FabFooterComponent, {injector});
        customElements.define('custom-footer', customFooter);
    }

    ngDoBootstrap() {
    }
}
