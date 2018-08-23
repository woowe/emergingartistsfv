import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { Observable, from } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { visitAnimationTrigger } from './get-involved.animations';

@Component({
    selector: 'app-get-involved',
    templateUrl: './get-involved.component.html',
    styleUrls: ['./get-involved.component.scss'],
    animations: [visitAnimationTrigger]
})
export class GetInvolvedComponent implements OnInit {
    fields$: Observable<any>;
    animState = null;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.fields$ = from(this.contentful.getGetInvolvedData()).pipe(
            tap(console.log),
            map(data => data.fields),
            tap(() => {
                this.animState = 'loaded';
            }),
            share()
        );
    }
}
