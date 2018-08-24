import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateModule } from './donate.module';
import { DonateComponent } from './containers/donate/donate.component';

const routes: Routes = [
    {
        path: '',
        component: DonateComponent
    }
];

@NgModule({
    imports: [DonateModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DonateRoutingModule {}
