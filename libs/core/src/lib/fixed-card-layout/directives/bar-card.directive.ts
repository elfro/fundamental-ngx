import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../../utils/abstract-fd-ngx-class';

@Directive({
    selector: '[barCardStandard], [fd-bar-card-standard]'
})
export class BarCardStandardDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 6');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Directive({
    selector: '[barCardCondensed], [fd-bar-card-condensed]'
})
export class BarCardCondensedDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 8');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Directive({
    selector: '[barCardExtended], [fd-bar-card-extended]'
})
export class BarCardExtendedDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 2');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}
