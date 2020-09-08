import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../../utils/abstract-fd-ngx-class';

@Directive({
    selector: '[tableCard], [fd-table-card]'
})
export class TableCardDirective extends AbstractFdNgxClass {
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
