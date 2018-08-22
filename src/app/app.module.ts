import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
