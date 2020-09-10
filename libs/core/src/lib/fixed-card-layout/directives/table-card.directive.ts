import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[tableCard], [fd-table-card]'
})
export class TableCardDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** sets height in terms of span for extended list card in grid layout*/
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 8';

    /** @hidden */
    constructor() {}
}
