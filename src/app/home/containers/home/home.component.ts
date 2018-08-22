import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    fields: any;

    constructor(private contentful: ContentfulService) {}

    ngOnInit() {
        this.contentful
            .getHomepageData()
            .then(data => {
                console.log(data);

                this.fields = data.fields;
            })
            .catch(console.log);
    }
}
