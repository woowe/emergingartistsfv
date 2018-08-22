import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetInvolvedModule } from './get-involved.module';
import { GetInvolvedComponent } from './containers/get-involved/get-involved.component';

const routes: Routes = [
    {
        path: '',
        component: GetInvolvedComponent
    }
];

@NgModule({
    imports: [GetInvolvedModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetInvolvedRoutingModule {}
