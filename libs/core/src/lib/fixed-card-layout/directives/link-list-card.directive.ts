import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[linkListImageCard], [fd-link-list-image-card]'
})
export class LinkListImageCardStandardDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 7';

    /** @hidden */
    constructor() {}
}

@Directive({
    selector: '[linkListAvatarCardCondensed], [fd-link-list-avatar-card]'
})
export class LinkListAvatarDirective {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    @Input()
    @HostBinding('style.grid-row-end')
    span = 'span 10';

    /** @hidden */
    constructor() {}
}

@Directive({
    selector: '[linkListIconCard], [fd-link-list-icon-card]'
})
export class LinkListIconCardExtendedDirective {
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
    selector: '[linkListNoSubtitleCard], [fd-link-list-no-subtitle-card]'
})
export class LinkListNoSubtitleCardExtendedDirective {
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
