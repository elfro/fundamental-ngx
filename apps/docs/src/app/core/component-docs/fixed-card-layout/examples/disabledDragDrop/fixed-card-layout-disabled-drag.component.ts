import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'fd-fixed-card-layout-disabled-drag',
    templateUrl: './fixed-card-layout-disabled-drag.component.html'
})
export class FixedCardLayoutDisabledDragExampleComponent {
    dragDisabled = false;

    constructor(private _cd: ChangeDetectorRef) {}

    public changeDragBehaviour(event: MouseEvent): void {
        this.dragDisabled = !this.dragDisabled;
        this._cd.detectChanges();
    }
}
