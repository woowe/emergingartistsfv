import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInvolvedComponent } from './containers/get-involved/get-involved.component';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, CoreModule, FlexLayoutModule],
    declarations: [GetInvolvedComponent],
    exports: [GetInvolvedComponent]
})
export class GetInvolvedModule {}
