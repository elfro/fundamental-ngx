import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { FixedCardLayoutDocsComponent } from './fixed-card-layout-docs.component';
import { FixedCardLayoutExampleComponent } from './examples/fixed-card-layout-examples.component';
import { FixedCardLayoutDocsHeaderComponent } from './fixed-card-layout-docs-header/layout-grid-docs-header.component';
import { FixedCardLayoutModule } from '@fundamental-ngx/core';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
    {
        path: '',
        component: FixedCardLayoutDocsHeaderComponent,
        children: [
            { path: '', component: FixedCardLayoutDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.fixedCardLayout } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, FixedCardLayoutModule, MatCardModule],
    exports: [RouterModule],
    declarations: [FixedCardLayoutDocsComponent, FixedCardLayoutExampleComponent, FixedCardLayoutDocsHeaderComponent]
})
export class FixedCardLayoutDocsModule {}
