import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './containers/overview/overview.component';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, CoreModule, FlexLayoutModule],
    declarations: [OverviewComponent],
    exports: [OverviewComponent]
})
export class OverviewModule {}
