import { Component, OnInit } from '@angular/core';
import { visitAnimation, visitAnimationTrigger } from './donate.animation';

@Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.scss'],
    animations: [visitAnimationTrigger]
})
export class DonateComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
