import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home-routing.module#HomeRoutingModule'
    },
    {
        path: 'overview',
        loadChildren: './overview/overview-routing.module#OverviewRoutingModule'
    },
    {
        path: 'get-involved',
        loadChildren:
            './get-involved/get-involved-routing.module#GetInvolvedRoutingModule'
    },
    {
        path: 'team',
        loadChildren: './team/team-routing.module#TeamRoutingModule'
    },
    {
        path: 'donate',
        loadChildren: './donate/donate-routing.module#DonateRoutingModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
