import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { visitAnimationTrigger } from './home.animations';
import { AnimationBuilder } from '@angular/animations';

import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [visitAnimationTrigger]
})
export class HomeComponent implements OnInit {
    fields: any;
    animState = null;

    constructor(
        private contentful: ContentfulService,
        private ab: AnimationBuilder,
        private meta: Meta,
        private title: Title
    ) {}

    ngOnInit() {
        this.contentful
            .getHomepageData()
            .then(data => {
                console.log(
                    data,
                    ((data.fields as any).metaKeywords || []).join(', ')
                );

                this.fields = data.fields;

                this.animState = 'loaded';

                this.title.setTitle(
                    (data.fields as any).metaTitle ||
                        'Emerging Artists Fox Valley'
                );

                this.meta.addTags([
                    { name: 'author', content: 'emergingartistsfv.com' },
                    {
                        name: 'keywords',
                        content: ((data.fields as any).metaKeywords || []).join(
                            ', '
                        )
                    },
                    {
                        name: 'description',
                        content: (data.fields as any).metaDescription || ''
                    }
                ]);
            })
            .catch(console.log);
    }
}
