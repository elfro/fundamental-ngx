import { Component } from '@angular/core';
import * as fixedCardLayoutSrc from '!raw-loader!./examples/fixed-card-layout-examples.component.html';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'fd-fixed-card-layout-docs',
    templateUrl: './fixed-card-layout-docs.component.html'
})
export class FixedCardLayoutDocsComponent {
    defaultFixedCardLayout: ExampleFile[] = [
        {
            language: 'html',
            code: fixedCardLayoutSrc,
            fileName: 'fixed-card-layout-examples'
        }
    ];
}
