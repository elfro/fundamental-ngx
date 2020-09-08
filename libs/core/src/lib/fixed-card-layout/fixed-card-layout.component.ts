import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ContentChildren,
    QueryList
} from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';
import { MatCard } from '@angular/material/card';
@Component({
    selector: 'fd-fixed-card-layout',
    templateUrl: './fixed-card-layout.component.html',
    styleUrls: ['./fixed-card-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedCardLayoutComponent extends AbstractFdNgxClass {
    @ContentChildren(MatCard)
    cards: QueryList<MatCard>;

    /** @hidden */
    _setProperties(): void {
        this._addClassToElement('fd-layout-grid');
        this._addStyleToElement('grid-template-columns', 'repeat(auto-fill, minmax(20rem, 1fr))');
        this._addStyleToElement('grid-auto-rows', '100px');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}
