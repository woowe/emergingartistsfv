import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './containers/overview/overview.component';
import { OverviewModule } from './overview.module';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    }
];

@NgModule({
    imports: [OverviewModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverviewRoutingModule {}
