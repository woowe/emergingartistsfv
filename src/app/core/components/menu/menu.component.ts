import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { visitAnimationTrigger } from './menu.animations';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [visitAnimationTrigger]
})
export class MenuComponent implements OnInit {
    active = false;

    constructor() {}

    ngOnInit() {}

    clicked() {
        this.active = !this.active;
    }
}
