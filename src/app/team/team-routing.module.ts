import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamModule } from './team.module';
import { TeamComponent } from './containers/team/team.component';

const routes: Routes = [{
    path: '',
    component: TeamComponent
}];

@NgModule({
  imports: [TeamModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
