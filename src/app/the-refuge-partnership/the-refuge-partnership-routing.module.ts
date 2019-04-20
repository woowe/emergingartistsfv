import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheRefugePartnershipModule } from './the-refuge-partnership.module';
import { TheRefugePartnershipComponent } from './containers/the-refuge-partnership/the-refuge-partnership.component';

const routes: Routes = [
    {
        path: '',
        component: TheRefugePartnershipComponent
    }
];

@NgModule({
    imports: [TheRefugePartnershipModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheRefugePartnershipRoutingModule {}
