import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/core/services/contentful/contentful.service';
import { Meta, Title } from '@angular/platform-browser';
import { visitAnimation } from './the-refuge-partnership.animations';
import { trigger } from '@angular/animations';

@Component({
    selector: 'app-the-refuge-partnership',
    templateUrl: './the-refuge-partnership.component.html',
    styleUrls: ['./the-refuge-partnership.component.scss'],
    animations: [trigger('visit', visitAnimation)]
})
export class TheRefugePartnershipComponent implements OnInit {
    fields: any;
    animState = null;

    constructor(
        private contentful: ContentfulService,
        private meta: Meta,
        private title: Title
    ) {}

    ngOnInit() {
        this.contentful
            .getRefugeData()
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
