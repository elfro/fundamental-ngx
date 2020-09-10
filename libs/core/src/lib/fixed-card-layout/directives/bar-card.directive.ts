import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[barCardStandard], [fd-bar-card-standard]'
})
export class BarCardStandardDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** sets height in terms of span for extended list card in grid layout*/
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 6';

    /** @hidden */
    constructor() {}
}

@Directive({
    selector: '[barCardCondensed], [fd-bar-card-condensed]'
})
export class BarCardCondensedDirective {
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

@Directive({
    selector: '[barCardExtended], [fd-bar-card-extended]'
})
export class BarCardExtendedDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** sets height in terms of span for extended list card in grid layout*/
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 2';

    /** @hidden */
    constructor() {}
}
