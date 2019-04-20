import { Component, OnInit, Input } from '@angular/core';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { from, Observable, Subject, of } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

// import {  } from 'contentful';

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
    selector: 'app-header-image',
    templateUrl: './header-image.component.html',
    styleUrls: ['./header-image.component.scss']
})
export class HeaderImageComponent implements OnInit {
    private _src: string;

    public get src(): string {
        return this._src;
    }

    @Input()
    public set src(value: string) {
        this._src = value;

        if (!value) {
            this.image$ = this.selectImage$;
        } else {
            this.image$ = of(this.src);
        }
    }

    selectImage$: Observable<any>;
    image$: Observable<any>;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.selectImage$ = from(this.contentful.getGhostArt()).pipe(
            map(data => shuffle(data.items)[0].fields.image.fields.file.url),
            tap(console.log),
            share()
        );

        console.log('ngInit -- ', this.src);
        if (!this.src) {
            this.image$ = this.selectImage$;
        }
    }
}
