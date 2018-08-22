import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home.module';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), HomeModule],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
