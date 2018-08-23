import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { Observable, from } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { visitAnimationTrigger } from './get-involved.animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-get-involved',
    templateUrl: './get-involved.component.html',
    styleUrls: ['./get-involved.component.scss'],
    animations: [visitAnimationTrigger]
})
export class GetInvolvedComponent implements OnInit {
    fields$: Observable<any>;
    animState = null;

    constructor(
        private contentful: ContentfulService,
        private meta: Meta,
        private title: Title
    ) {}

    ngOnInit() {
        this.fields$ = from(this.contentful.getGetInvolvedData()).pipe(
            tap(console.log),
            map(data => data.fields),
            tap(fields => {
                this.animState = 'loaded';

                this.title.setTitle(
                    (fields as any).metaTitle ||
                        'Emerging Artists Fox Valley'
                );

                this.meta.addTags([
                    { name: 'author', content: 'emergingartistsfv.com' },
                    {
                        name: 'keywords',
                        content: ((fields as any).metaKeywords || []).join(
                            ', '
                        )
                    },
                    {
                        name: 'description',
                        content: (fields as any).metaDescription || ''
                    }
                ]);
            }),
            share()
        );
    }
}
