import {
    Component,
    ElementRef,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ContentChildren,
    QueryList,
    Input,
    OnChanges,
    OnInit,
    HostBinding
} from '@angular/core';
import { MatCard } from '@angular/material/card';
import { CssClassBuilder, applyCssClass } from '../utils/public_api';
@Component({
    selector: 'fd-fixed-card-layout',
    templateUrl: './fixed-card-layout.component.html',
    styleUrls: ['./fixed-card-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedCardLayoutComponent implements CssClassBuilder, OnInit, OnChanges {
    @ContentChildren(MatCard)
    cards: QueryList<MatCard>;

    /** The property allows user to pass additional css classes
     */
    @Input()
    class = '';

    /**
     * sets default grid row size.
     */
    @Input()
    @HostBinding('style.grid-auto-rows')
    public gridHeight = '100px';

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string[] {
        return ['fd-layout-grid', 'fd-layout-grid--responsive'];
    }

    /** @hidden */
    constructor(private _elementRef: ElementRef) {}

    /** Function runs when component is initialized
     * function should build component css class
     * function should build css style
     */
    public ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    public ngOnInit(): void {
        this.buildComponentCssClass();
    }

    /** HasElementRef interface implementation
     * function used by applyCssClass and applyCssStyle decorators
     */
    public elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}
