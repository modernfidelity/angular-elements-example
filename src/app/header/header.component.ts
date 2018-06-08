import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'custom-header',
    template: `<div class="custom-header">I AM BOB THE HEADER</div>`,
    styles: [
        `
    custom-header {
      background: red;
    }
  `
    ],
    encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent {


}
