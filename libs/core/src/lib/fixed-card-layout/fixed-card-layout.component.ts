import { Component, Input, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';

@Component({
    selector: 'fd-fixed-card-layout',
    templateUrl: './fixed-card-layout.component.html',
    styleUrls: ['./fixed-card-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedCardLayoutComponent extends AbstractFdNgxClass {
    /** @hidden */
    _setProperties(): void {
        this._addClassToElement('fd-layout-grid');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}
