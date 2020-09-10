import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[listCardStandard], [fd-list-card-standard]'
})
export class ListCardStandardDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** sets height in terms of span for standard list card in grid layout*/
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 4';

    /** @hidden */
    constructor() {}
}

@Directive({
    selector: '[listCardExtended], [fd-list-card-extended]'
})
export class ListCardExtendedDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** sets height in terms of span for extended list card in grid layout*/
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 5';

    /** @hidden */
    constructor() {}
}
