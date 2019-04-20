import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TheRefugePartnershipComponent } from './containers/the-refuge-partnership/the-refuge-partnership.component';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, CoreModule, FlexLayoutModule],
    declarations: [TheRefugePartnershipComponent]
})
export class TheRefugePartnershipModule {}
