import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    fields: any;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.contentful
            .getOverviewData()
            .then(data => {
                console.log(data);

                this.fields = data.fields;
            })
            .catch(console.log);
    }
}
