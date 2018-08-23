import { Component } from '@angular/core';
import { fadeAnimation, loadingAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeAnimation, loadingAnimation]
})
export class AppComponent {
    title = 'emergingartistsfv';
}
