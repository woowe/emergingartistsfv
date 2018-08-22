import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './containers/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, CoreModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}
