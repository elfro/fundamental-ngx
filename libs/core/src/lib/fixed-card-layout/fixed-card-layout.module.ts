import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedCardLayoutComponent } from './fixed-card-layout.component';
import { ListCardStandardDirective } from './directives/list-card.directive';
import { ListCardExtendedDirective } from './directives/list-card.directive';
import { BarCardStandardDirective } from './directives/bar-card.directive';
import { BarCardCondensedDirective } from './directives/bar-card.directive';
import { BarCardExtendedDirective } from './directives/bar-card.directive';
import {
    LinkListImageCardStandardDirective,
    LinkListAvatarDirective,
    LinkListIconCardExtendedDirective,
    LinkListNoSubtitleCardExtendedDirective
} from './directives/link-list-card.directive';
import { TableCardDirective } from './directives/table-card.directive';

@NgModule({
    declarations: [
        FixedCardLayoutComponent,
        ListCardStandardDirective,
        ListCardExtendedDirective,
        LinkListImageCardStandardDirective,
        LinkListAvatarDirective,
        LinkListIconCardExtendedDirective,
        LinkListNoSubtitleCardExtendedDirective,
        BarCardStandardDirective,
        BarCardCondensedDirective,
        BarCardExtendedDirective,
        TableCardDirective
    ],
    imports: [CommonModule],
    exports: [
        FixedCardLayoutComponent,
        ListCardStandardDirective,
        ListCardExtendedDirective,
        LinkListImageCardStandardDirective,
        LinkListAvatarDirective,
        LinkListIconCardExtendedDirective,
        LinkListNoSubtitleCardExtendedDirective,
        BarCardStandardDirective,
        BarCardCondensedDirective,
        BarCardExtendedDirective,
        TableCardDirective
    ]
})
export class FixedCardLayoutModule {}
