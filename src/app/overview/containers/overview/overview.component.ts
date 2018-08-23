import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { visitAnimationTrigger } from './overview.animations';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    animations: [visitAnimationTrigger]
})
export class OverviewComponent implements OnInit {
    fields: any;
    animState = null;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.contentful
            .getOverviewData()
            .then(data => {
                console.log(data);

                this.fields = data.fields;
                this.animState = 'loaded';
            })
            .catch(console.log);
    }
}
