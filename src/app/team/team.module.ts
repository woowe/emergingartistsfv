import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './containers/team/team.component';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule
  ],
  declarations: [TeamComponent],
  exports: [TeamComponent]
})
export class TeamModule { }
