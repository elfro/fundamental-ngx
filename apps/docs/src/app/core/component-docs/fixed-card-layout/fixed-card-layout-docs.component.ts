import { Component } from '@angular/core';
import * as fixedCardLayoutSrc from '!raw-loader!./examples/fixed-card-layout-example.component.html';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-fixed-card-layout',
    templateUrl: './fixed-card-layout-docs.component.html'
})
export class FixedCardLayoutDocsComponent {
    defaultFixedCardLayout: ExampleFile[] = [
        {
            language: 'html',
            code: fixedCardLayoutSrc,
            fileName: 'fixed-card-layout-example'
        }
    ];
}
