import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './containers/donate/donate.component';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, CoreModule, FlexLayoutModule],
    declarations: [DonateComponent],
    exports: [DonateComponent]
})
export class DonateModule {}
