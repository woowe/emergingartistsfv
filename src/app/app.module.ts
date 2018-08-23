import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, AppRoutingModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
