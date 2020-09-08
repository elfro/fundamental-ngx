import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../../utils/abstract-fd-ngx-class';

@Directive({
    selector: '[listCardStandard], [fd-list-card-standard]'
})
export class ListCardStandardDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 4');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Directive({
    selector: '[listCardExtended], [fd-list-card-extended]'
})
export class ListCardExtendedDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 5');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}
