import {
    Component,
    OnInit,
    HostBinding,
    HostListener,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { visitAnimationTrigger } from './menu.animations';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { Observable, from } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [visitAnimationTrigger]
})
export class MenuComponent implements OnInit, AfterViewInit {
    @ViewChild('menu')
    menu: ElementRef;

    images$: Observable<any>;

    active = false;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.images$ = from(this.contentful.getGhostArt()).pipe(
            map(data => shuffle(data.items).slice(0, 3)),
            map((items: any[]) => {
                const rect = this.menu.nativeElement.getBoundingClientRect();
                const h_step = rect.height / items.length;

                return items.map((item, i) => {
                    const top =
                        Math.random() * (h_step - 100) + h_step * i + 100;
                    const left = Math.random() * (rect.width - 200) + 100;

                    item.position = { top, left };

                    return item;
                });
            }),
            tap(console.log),
            share()
        );
    }

    clicked() {
        this.active = !this.active;
    }
}
