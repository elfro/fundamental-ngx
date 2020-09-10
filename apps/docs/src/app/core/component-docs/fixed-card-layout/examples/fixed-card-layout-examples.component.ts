import { Component } from '@angular/core';

@Component({
    selector: 'fd-fixed-card-layout-example',
    templateUrl: './fixed-card-layout-example.component.html',
    styleUrls: ['./fixed-card-layout-example.component.scss']
})
export class FixedCardLayoutExampleComponent {
    gridHeight = '50px';
    standardListCardSpan = 'span 7';
    extendedListCardSpan = 'span 9';
    standardBarCardSpan = 'span 11';
    imageCardSpan = 'span 12';
}
