import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../../utils/abstract-fd-ngx-class';

@Directive({
    selector: '[linkListImageCard], [fd-link-list-image-card]'
})
export class LinkListImageCardStandardDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 7');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Directive({
    selector: '[linkListAvatarCardCondensed], [fd-link-list-avatar-card]'
})
export class LinkListAvatarDirective extends AbstractFdNgxClass {
    /**
     * name of card
     */
    @Input()
    name: string;

    /** @hidden */
    _setProperties(): void {
        this._addStyleToElement('grid-row-end', 'span 10');
    }

    /** @hidden */
    constructor(private elementRef: ElementRef) {
        super(elementRef);
    }
}

@Directive({
    selector: '[linkListIconCard], [fd-link-list-icon-card]'
})
export class LinkListIconCardExtendedDirective extends AbstractFdNgxClass {
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
    selector: '[linkListNoSubtitleCard], [fd-link-list-no-subtitle-card]'
})
export class LinkListNoSubtitleCardExtendedDirective extends AbstractFdNgxClass {
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
