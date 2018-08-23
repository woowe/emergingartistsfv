import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { visitAnimationTrigger } from './overview.animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    animations: [visitAnimationTrigger]
})
export class OverviewComponent implements OnInit {
    fields: any;
    animState = null;

    constructor(
        private contentful: ContentfulService,
        private meta: Meta,
        private title: Title
    ) {}

    ngOnInit() {
        this.contentful
            .getOverviewData()
            .then(data => {
                console.log(data);

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
