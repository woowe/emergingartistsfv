import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './containers/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, CoreModule, RouterModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}
